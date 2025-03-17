const express = require("express");


const homeRouter = express.Router();
const homeControllers = require("../Controllers/home.controllers");

homeRouter.route("/")
    .get(homeControllers.home)

module.exports = homeRouter;