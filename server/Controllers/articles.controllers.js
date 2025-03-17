const data = require("../ArrayofBlogs/ArrayofBlogs");

const article = (req, res) =>{
const{Id, cat} = req.params;
    
    
    if(Id && cat){
        res.send(
            data.ArrayofBlogs.filter( article => article.ID === Id && article.Category === cat)
        )
    }
    else{
        res.send(`No Data Found`);
    }
}

module.exports.article = article;