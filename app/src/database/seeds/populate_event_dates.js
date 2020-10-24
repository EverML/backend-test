
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('event_dates').del()
    .then(function () {
      // Inserts seed entries
      return knex('event_dates').insert([
        {event_id: 1, event_date: '22/10/2020',event_time:'18:30'},
        {event_id: 1, event_date: '23/10/2020',event_time:'19:30'},
        {event_id: 1, event_date: '24/10/2020',event_time:'17:30'},
        {event_id: 2, event_date: '02/10/2020',event_time:'18:30'},
        {event_id: 2, event_date: '03/10/2020',event_time:'19:30'},
        {event_id: 2, event_date: '04/10/2020',event_time:'17:30'},
        {event_id: 3, event_date: '12/10/2020',event_time:'18:30'},
        {event_id: 3, event_date: '13/10/2020',event_time:'19:30'},
        {event_id: 3, event_date: '14/10/2020',event_time:'17:30'}
      ]);
    });
};
