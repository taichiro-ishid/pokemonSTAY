module.exports = (knex, GetPokemon) => {
    return (params) => {
        const name = params;
        const pokemons = ["ピカチュウ", "リザードン", "ラプラス", "カビゴン", "ミュウツー", "とおりもん", "ミュウスリー", "けつばん", "まさこ", "ぎゅうた"]
        const getpokemon = pokemons[Math.floor(Math.random() * pokemons.length)];
        console.log(getpokemon);
        console.log(userId)

        knex("pokeusers")
            .where({ username: name })
            .select()
            .then((users) => {
                console.log("aaa")
                if (users.length) {
                    knex("get_pokemons")
                        .where({ pokemon_name: getpokemon })
                        .select()
                        .then((pokemon) => {
                            console.log("bbb")

                            if (pokemon.length) {
                                //update
                                console.log("ccc")


                            } else {
                                console.log("ddd")

                                //insert
                                return knex("get_pokemons")
                                    .insert({
                                        pokemon_name: getpokemon,
                                        user_id: userId,
                                        count: 1
                                    })
                                    .then(() => {
                                        console.log("eee")
                                        const returnmessage = `野生の${getpokemon}を捕まえた！`
                                        console.log(returnmessage)
                                        return returnmessage;
                                    })
                                    .catch((err) => {
                                        // sanitize known errors
                                        console.log("fff")
                                        if (
                                            err.message.match("duplicate key value") ||
                                            err.message.match("UNIQUE constraint failed")
                                        )
                                            return Promise.reject(new Error("That username already exists"));
                                        // throw unknown errors
                                        console.log("ggg")
                                        return Promise.reject(err);
                                    });
                            }
                        });
                }
            });
    };
};