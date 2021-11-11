module.exports = (knex, getPokemon) => {
    return (userId, pokemonname) => {
        return knex("get_pokemons")
            .where({ user_id: userId, pokemon_name: pokemonname })
            .select()
            .then((pokemon) => {
                if (pokemon.length) {
                    return pokemon;
                    // return new getPokemon(pokemon.pop());
                } else {
                    return pokemon;
                }
            });
    };
};