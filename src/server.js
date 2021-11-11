//サーバを立ち上げる準備
// config.jsは、アプリのグローバルな設定ファイルです
const config = require("../config");
const express = require("express");
const app = express();
//データベースへの接続を初期化し、これを内部の様々なサブモジュールに渡します
const knex = require("knex")(config.db);
const models = require("../models")(knex);



const setupServer = () => {
    /**
     * Create, set up and return your express server, split things into separate files if it becomes too long!
     */
    app.use(express.json());

    app.get("/pokemon/users", (req, res) => {
        models.users
            .get(req.query.name)
            .then((user) => res.status(200).json(user.serialize()))
            .catch((err) => res.status(400).send(err.message));
    });

    app.post("/pokemon/users", (req, res) => {
        const { name } = req.body;
        models.users
            .create(name)
            .then((user) => res.status(201).json(user.serialize()))
            .catch((err) => {
                if (err.message === "That username already exists") {
                    return models.users
                        .get({ username: req.body.username })
                        .then((user) => res.status(200).json(user.serialize()));
                }
                return res.status(400).send(err.message);
            });
    });

    app.post("/pokemon/getpokemons", (req, res) => {
        const { name } = req.body;
        let userId = 0;
        const pokemons = ["ピカチュウ", "リザードン", "ラプラス", "カビゴン", "ミュウツー", "とおりもん", "ミュウスリー", "けつばん", "まさこ", "ぎゅうた"]
        const yaseipokemon = pokemons[Math.floor(Math.random() * pokemons.length)];

        new Promise((resolve) => {
            models.users
                .get(name)
                .then((user) => {
                    userId = user.id
                    resolve()
                })
                .catch((err) => res.status(400).send(err.message));
        }).then(() => {
            models.getPokemon
                .get(userId, yaseipokemon)
                .then((havepokemon) => {
                    if (havepokemon.length) {
                        //update処理
                        console.log(havepokemon[0].count)
                        models.getPokemon
                            .update(userId, yaseipokemon, havepokemon[0].count)
                            .then((message) => {
                                res.status(201).send(message);
                            })
                    } else {
                        models.getPokemon
                            .create(userId, yaseipokemon)
                            .then((message) => {
                                res.status(201).send(message)
                            })
                            .catch((err) => {
                                console.log(err)
                                return res.status(400).send(err.message);
                            });
                    }
                })
                .catch((err) => res.status(400).send(err.message));
        })
    });

    app.patch("/pokemon/getpokemons", (req, res) => {
        const { id } = req.body;
        models.getPokemon
            .delete(id)
            .then((val) => res.status(200).send(val))
            .catch((err) => {
                return res.status(400).send(err.message);
            });
    });
    return app;
};

module.exports = { setupServer };