module.exports = (knex, PokeUser) => {
    return (oldUserName, newUserName) => {
        return knex("pokeusers")
            .where({ username: oldUserName.toLowerCase() })
            .update({ username: newUserName })
            .then(() => {
                const returnmessage = `名前を${newUserName}に変更したよ！`
                return returnmessage;
            });
    };
};