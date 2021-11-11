module.exports = (knex, getPokemon) => {
    return (userId) => {
        return knex("get_pokemons")
            .where({ user_id: userId })
            .select()
            .then((pokemons) => {
                return pokemons.map((pokemon) => new getPokemon(pokemon))
            });
    };
};