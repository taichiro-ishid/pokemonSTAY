module.exports = function(knex) {
    return {
        users: require("./pokeusers")(knex),
        getPokemon: require("./getPokemon")(knex),
    };
};