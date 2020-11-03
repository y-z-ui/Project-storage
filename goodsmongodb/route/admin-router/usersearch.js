const userdb = require("../../model/userDB");
module.exports = async (req, res) => {

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 3;
    let db = req.query.searchTo || "";
    console.log(db);
    let reg = new RegExp(db, "gi");

    let listuser = await userdb.find({
        $or: [{
            "uname": reg
        }]
    }).limit(size).skip((page - 1) * size);

    let total = (await userdb.find({
        $or: [{
            "uname": reg
        }]
    })).length;
    let totalpage = Math.ceil(total / size);

    res.render("./admin/usersearch", {
        lists: listuser,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        searchTo: db
    });
}