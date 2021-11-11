const moment = require("moment");

const getPokemon = function(dbgetPokemon) {
    this.id = dbgetPokemon.id;
    this.user_id = dbgetPokemon.user_id;
    this.pokemon_name = dbgetPokemon.pokemon_name;
    this.count = dbgetPokemon.count;
    this.createdAt = new Date(dbgetPokemon.created_at);
};

getPokemon.prototype.serialize = function() {
    // serialize を使用してオブジェクトをフォーマットし、
    // パスワードなどクライアントに送信すべきでない情報（パスワードなど）を削除します。
    return {
        id: this.id,
        user_id: this.user_id,
        pokemon_name: this.pokemon_name,
        count: this.count,
        createdAt: moment(this.createdAt).format("hh:mm:ss"),
    };
};

module.exports = (knex) => {
    return {
        create: require("./create")(knex, getPokemon),
        get: require("./get")(knex, getPokemon),
        update: require("./update")(knex, getPokemon),
        delete: require("./delete")(knex, getPokemon),
        list: require("./list")(knex, getPokemon),
    };
};