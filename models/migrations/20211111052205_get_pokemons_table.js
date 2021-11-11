exports.up = function(knex) {
    return knex.schema.createTable("get_pokemons", (t) => {
        t.increments()
            .index();

        t.integer("user_id")
            .unsigned()
            .notNullable()
            .references("id")
            .inTable("pokeusers");

        t.string("pokemon_name", 50)
            .notNullable()

        //ポケモンを捕まえた数
        t.integer("count")
            .unsigned()
            .notNullable()

        t.timestamp("created_at")
            .notNullable()
            .defaultTo(knex.fn.now()); // default to the current time
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable("get_pokemons");
};