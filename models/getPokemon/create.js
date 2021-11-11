module.exports = (knex, getPokemon) => {
    return (userId, yaseipokemon) => {
        return knex("get_pokemons")
            .insert({
                pokemon_name: yaseipokemon,
                user_id: userId,
                count: 1
            })
            .then(() => {
                const returnmessage = `野生の${yaseipokemon}を捕まえた！`
                return returnmessage;
            })
            .catch((err) => {
                // sanitize known errors
                if (
                    err.message.match("duplicate key value") ||
                    err.message.match("UNIQUE constraint failed")
                )
                    return Promise.reject(new Error("That username already exists"));
                // throw unknown errors
                return Promise.reject(err);
            });
    }
}