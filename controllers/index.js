const express = require("express");

const router = express.Router();

const userRouter = require("./user");

module.exports = (models) => {
    router.use("/users", userRouter(models));

    return router;
};