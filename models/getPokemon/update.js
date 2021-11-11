module.exports = (knex, getPokemon) => {
    return (userId, pokemonname, counted) => {
        return knex("get_pokemons")
            .where({ user_id: userId, pokemon_name: pokemonname })
            .update({ count: counted + 1 })
            .then(() => {
                const returnmessage = `野生の${pokemonname}を捕まえた！`
                return returnmessage;
            });
    };
};