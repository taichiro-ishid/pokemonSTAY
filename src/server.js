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

    app.get("/pokemon/user", (req, res) => {
        models.users
            .get(req.query.name)
            .then((user) => res.status(200).json(user.serialize()))
            .catch((err) => res.status(400).send(err.message));
    });

    app.post("/pokemon/user", (req, res) => {
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



    return app;
};

module.exports = { setupServer };