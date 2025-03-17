const express = require("express");

const router = express.Router();
const homeRouter = require("./home.route");
const categoryRouter = require("./category.route");
const articlesRouter = require("./articles.route");

router.use("/MakeYourTrip", homeRouter);
router.use("/MakeYourTrip", categoryRouter);
router.use("/MakeYourTrip", articlesRouter);

module.exports=router;