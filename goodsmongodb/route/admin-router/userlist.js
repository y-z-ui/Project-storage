const userdb = require("../../model/userDB");
module.exports = async (req, res) => {

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 3;

    let listuser = await userdb.find().limit(size).skip((page - 1) * size);

    let total = (await userdb.find()).length;
    let totalpage = Math.ceil(total / size);

    res.render("./admin/userlist", {
        lists: listuser,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        
    });
}