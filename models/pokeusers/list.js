const users = require(".");

module.exports = (knex, PokeUser) => {
    return () => {
        return knex
            .select()
            .table("pokeusers")
            .then((users) => {
                return users.map((user) => new PokeUser(user))
            })

    };
};