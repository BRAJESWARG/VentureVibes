const data = require("../ArrayofBlogs/ArrayofBlogs");

const home = (req, res) =>{
    res.send(data.ArrayofBlogs);
}

module.exports.home = home;