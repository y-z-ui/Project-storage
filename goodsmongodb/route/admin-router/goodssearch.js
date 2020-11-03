const goodsdb = require("../../model/goodsDB");
module.exports = async (req, res) => {

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 3;
    let db = req.query.searchTo || "";
    // console.log(db);
    let reg = new RegExp(db, "gi");

    let listuser = await goodsdb.find({
        $or: [{
            "gname": reg
        }]
    }).limit(size).skip((page - 1) * size);
    console.log(listuser);
    let total = (await goodsdb.find({
        $or: [{
            "gname": reg
        }]
    })).length;
    let totalpage = Math.ceil(total / size);

    res.render("./admin/goodssearch", {
        lists: listuser,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        searchTo: db
    });
}