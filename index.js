const { setupServer } = require("./src/server");
const express = require("express");
const app = express();

const server = setupServer();
const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
    console.log("Server listening on Port", PORT);
});