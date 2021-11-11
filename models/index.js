module.exports = function(knex) {
    return {
        users: require("./pokeusers")(knex),
    };
};