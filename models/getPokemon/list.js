module.exports = (knex, getPokemon) => {
    return (userId) => {
        return knex("get_pokemons")
            .where({ user_id: userId })
            .select()
            .then((pokemons) => {
                console.log("dddddddddddddddd", pokemons.map((pokemon) => new getPokemon(pokemon)))
                return pokemons.map((pokemon) => new getPokemon(pokemon))
            });
    };
};