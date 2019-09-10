
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { vin: '656511351JASHDKAKJA', make: 'Toyota', model: 'Camry', milleage: 60000, transmission_type: 'V3', title_status: 'clean' },

        { vin: 'ASJDLASKJD6564646', make: 'Ford', model: 'Camry', milleage: 60000, transmission_type: 'V3', title_status: 'clean' },
      ]);
    });
};
