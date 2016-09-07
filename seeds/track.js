
exports.seed = function(knex, Promise) {
  return Promise.join(
    knex('track').del(),

    knex('track').insert({id: 1, name: 'Strawberry Fields'}),
    knex('track').insert({id: 2, name: 'Soft Bulletin'})
  );
};
