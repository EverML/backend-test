
const { convertToDate }  = require('../helpers/DateTimeHelper')
const connection = require("../database/connection");


module.exports = {
  async index(request, response) {
    const { page = 1 } = request.query;

    const [count] = await connection("events").count();

    //const events = await getEventsWithDatesJoin(page);

    const events = await getEvents(page);

    const data = await Promise.all(events.map(async event => await getDatesForEachEvent(event)));

    response.header("X-Total-Count", count["count(*)"]);

    return response.json(data);
  },
  async find(request, response) {
    const {id} = request.params;
   

    const event = await connection('events')
        .where('id',id)
        .select(
          "events.id",
          "events.title",
          "events.description",
          "events.eventImage",
          "events.location")
        .first();



    if(event)
    {
      const dates = await getDatesForEachEvent(event);
      return response.json(dates);
    }
    else
      return response.status(404).send();
  },
  async create(request, response) {
    
    const { title,description,eventImage,location,dates } = request.body;

     const [id] = await connection('events').insert({
         title,
         description,
         eventImage,
         location
     });

     dates.forEach( async ({event_date,event_time}) => {
       await connection('event_dates').insert({
         event_id:id,
         event_date,
         event_time
       });

     });
   
    return response.json({ id,title,description,eventImage,location,dates});
  },
  async update(request, response) {
    /*
    UPDATE NOT IMPLEMENTED
    */
    return response.status(501).send();
  },
  async delete(request, response) {
    
    const {id} = request.params;

    const event = await connection('events')
        .where('id',id)
        .select('id')
        .first();

    if(event)
      await connection('events').where('id',id).delete();

    return response.status(204).send();
  },
};

async function getDatesForEachEvent(event)
{
  const dates =  await connection("event_dates")
    .where({event_id:event.id})
    .select("event_dates.event_date","event_dates.event_time");

    return {...event,dates}
}


async function getEvents(page)
{
  return await connection("events")
  .limit(10)
  .offset((page - 1) * 10)
  .select(
    "events.id",
    "events.title",
    "events.description",
    "events.eventImage",
    "events.location"
  )
}



async function getEventsWithDatesJoin(page) {
  return await connection("events")
    .leftJoin('event_dates', 'event_dates.event_id', '=', 'events.id')
    .limit(5)
    .offset((page - 1) * 5)
    .select(
      "events.id",
      "events.title",
      "events.description",
      "events.eventImage",
      "events.location",
      connection.raw("group_concat(event_dates.event_date) as dates")
    )
    .groupBy('events.id');
}

