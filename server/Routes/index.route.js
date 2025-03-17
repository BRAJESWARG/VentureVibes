const express = require("express");

const router = express.Router();
const homeRouter = require("./home.route");
const categoryRouter = require("./category.route");
const articlesRouter = require("./articles.route");

router.use("/VentureVibes", homeRouter);
router.use("/VentureVibes", categoryRouter);
router.use("/VentureVibes", articlesRouter);

module.exports=router;