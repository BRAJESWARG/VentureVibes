const express = require("express");
const categoryRouter = express.Router();
const categoryController = require("../Controllers/category.controllers");

categoryRouter.route("/:cat")
    .get(categoryController.category)

module.exports = categoryRouter;