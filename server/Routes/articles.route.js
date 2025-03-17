const express = require("express");

const articlesRouter = express.Router();
const articleControllers = require("../Controllers/articles.controllers");

articlesRouter.route("/article/:cat/:Id")
    .get(articleControllers.article)

module.exports = articlesRouter;