
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('events').del()
    .then(function () {
      // Inserts seed entries
      return knex('events').insert([
        {
          id: 1,
          title: "24 Festival de Cine para Niños y Jóvenes – Divercine",
          eventImage:"http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
          description: "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
          location: "Auditorio del SODRE"
        },
        {
          id: 2,
          title: "24 Festival de Cine para Niños y Jóvenes – Divercine",
          eventImage:"http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
          description: "Del lunes 27 de julio al sábado 1º de agosto se desarrolla en el Auditorio del SODRE Nelly Goitiño (18 de Julio y Rio Branco) el 24 Festival de Cine para Niños y Jóvenes - Divercine. La programación, que incluye películas de largo, medio y cortometraje de varias partes del mundo, está dividida en tres franjas de horarios cada día, de acuerdo a las edades del público a las que van dirigidas: a las 13 horas a partir de 3 años de edad; a las 14 horas a partir de los 6 años de edad; y desde las 15 se programan los medio y largometrajes para niños más grandes y adolescentes.",
          location: "Auditorio del SODRE"
        },
        {
          id: 3,
          title: "Otro evento Random",
          eventImage:"http://www.cartelera.com.uy/imagenes_espectaculos/moviedetail13/17511.jpg",
          description: "Esta es una decripcion onda Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptas ipsum amet, perspiciatis provident perferendis pariatur totam, veritatis reiciendis voluptates blanditiis temporibus recusandae quos unde eaque dolorum ut adipisci doloribus modi.",
          location: "Lado de la Republica"
        },
      ]);
    });
};
