const port = process.env.PORT ||  8040 ;
const express = require("express");
const cors = require("cors");
const Router = require("./Routes/index.route")

const server = express();

server.use(cors());


server.use("/api/v1", Router)

server.listen(port, () => {

    console.log(`Server Up And running at port, ${port}`);

})