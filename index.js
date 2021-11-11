/**
 ****************** DEPENDENCIES ******************
 */
const { setupServer } = require("./src/server");

// データベースへの接続を初期化し、これを内部の様々なサブモジュールに渡します
// const knex = require("knex")(config.db);
// const models = require("./models")(knex);

// サーバー用のルート設定。上記で生成したmodels (データベース情報や様々なメソッド)を渡しています。
// const apiRouter = require("./controllers")(models);

// Express サーバの設定
const express = require("express");
const app = express();

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});

// /**
//  ****************** SERVER SETUP ******************
//  */

// /*
// 以降では、サーバにミドルウェアを追加しています。
// ミドルウェアとは、expressの文脈では、リクエストを処理するために実行される機能の総称です。

// すべてのリクエストは、以下を上から順に実行します。
// */

// // 1. リクエストの Header を設定
// app.use((req, res, next) => {
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header(
//         "Access-Control-Allow-Methods",
//         "GET,PUT,POST,DELETE,OPTIONS,PATCH"
//     );
//     res.header(
//         "Access-Control-Allow-Headers",
//         "Origin, X-Requested-With, Content-Type, Accept, authorization"
//     );
//     next();
// });

// // 2. Body のデータを json として解析
// app.use(express.json({ type: "application/json", limit: "50mb" }));

// // 3. リクエストが「/api」で始まる場合は、apiRouter リクエストを渡す
// app.use("/api", apiRouter);

// // 4. 「/api」以外のリクエストの場合は、クライアントアプリへのアクセスとして処理する
// app.use(express.static(`${__dirname}/public`));

// /**
//  ****************** START SERVER ******************
//  */

// app.listen(config.express.port, () => {
//     console.log(`Server up and listening on port ${config.express.port}`);
// });