const goodsdb = require("../../model/goodsDB");
const userdb = require("../../model/userDB");
module.exports = async (req, res) => {
    let reqquery1 = await goodsdb.find(req.query)
    let reqquery2 = await userdb.find(req.query)
    if (reqquery1[0]) {
        await goodsdb.deleteOne(req.query);
        res.redirect("/admin/goodslist");
    } else if (reqquery2[0]._id) {
        await userdb.deleteOne(req.query);
        res.redirect("/admin/userlist");
    }
}