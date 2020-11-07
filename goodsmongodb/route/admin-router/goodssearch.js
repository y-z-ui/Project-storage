const goodsdb = require("../../model/goodsDB");
module.exports = async (req, res) => {

    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 3;
    let db = req.query.searchTo || "";
    let sort = req.query.msort || new RegExp("");
    let minpic = req.query.minpic || 0;
    let maxpic = req.query.maxpic || Number.POSITIVE_INFINITY;
    console.log(minpic, maxpic);
    let reg = new RegExp(db, "gi");

    let listuser = await goodsdb.find({

        "gname": reg,
        "msort": sort
    }).limit(size).skip((page - 1) * size);
    console.log(listuser);
    let total = (await goodsdb.find({
        "gname": reg,
        "gprice": {
            $gt: minpic,
            $lt: maxpic
        }
    })).length;
    let totalpage = Math.ceil(total / size);

    res.render("./admin/goodssearch", {
        lists: listuser,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage,
        searchTo: db,
        minpic: minpic,
        maxpic: maxpic,
        msort: sort
    });
}