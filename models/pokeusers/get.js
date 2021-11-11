module.exports = (knex, PokeUser) => {
    return (params) => {
        const username = params;
        console.log(username)
        return knex("pokeusers")
            .where({ username: username.toLowerCase() })
            .select()
            .then((users) => {
                if (users.length) {
                    return new PokeUser(users.pop());
                } else {
                    throw new Error(`Error finding user ${username}`)
                }
            });
    };
};