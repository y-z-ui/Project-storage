const goodsdb = require("../../model/goodsDB");
module.exports = async (req, res) => {
    let page = Number(req.query.page) || 1;
    let size = Number(req.query.size) || 3;


    let listgoods = await goodsdb.find().limit(size).skip((page - 1) * size);

    let total = (await goodsdb.find()).length;
    let totalpage = Math.ceil(total / size);

    res.render("./admin/goodslist", {
        lists: listgoods,
        page: page,
        size: size,
        total: total,
        totalpage: totalpage
    });
}