const data = require("../ArrayofBlogs/ArrayofBlogs");

const category = (req, res) =>{
    if(req.params.cat){
        res.send(
            data.ArrayofBlogs.filter( value => value.Category === req.params.cat )
            
        )
    }
    else{
        res.send("Error")
    }
}

module.exports.category = category;