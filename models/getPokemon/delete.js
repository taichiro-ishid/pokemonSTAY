module.exports = (knex, getPokemon) => {
    return (userId) => {
        console.log(userId);
        return knex("get_pokemons")
            .where({ user_id: userId })
            .delete()
            .then(() => {
                const returnmessage = "ポケモンを逃がしたよ！"
                return returnmessage;
            });
    };
};