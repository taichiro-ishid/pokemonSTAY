module.exports = (knex, getPokemon) => {
    return (userId, pokemonname) => {
        console.log(userId, pokemonname);
        return knex("get_pokemons")
            .where({ user_id: userId, pokemon_name: pokemonname })
            .select()
            .then((pokemon) => {
                console.log("ポケモンとれたよ", pokemon)
                if (pokemon.length) {
                    console.log("検証3", pokemon)
                    return pokemon;
                    // return new getPokemon(pokemon.pop());
                } else {
                    console.log("検証4", pokemon)
                    return pokemon;
                }
            });
    };
};