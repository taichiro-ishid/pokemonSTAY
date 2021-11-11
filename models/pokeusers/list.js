const users = require(".");

module.exports = (knex, PokeUser) => {
    return () => {
        // console.log(knex.select().table('users').then)
        // return Promise.resolve([]);// fix me!
        return knex
            .select()
            .table("pokeusers")
            .then((users) => {
                // console.log(userList)
                return users.map((user) => new PokeUser(user))
            })

    };
};