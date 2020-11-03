const goodsdb = require("../../model/goodsDB");
const userdb = require("../../model/userDB");
module.exports = async (req, res) => {
    let reqquery1 = await goodsdb.find(req.query);
    let reqquery2 = await userdb.find(req.query);

    if (Boolean(reqquery1[0])) {
        res.render("./admin/editgoods", {
            lists: reqquery1[0]
        })
    } else if (Boolean(reqquery2[0])) {
        res.render("./admin/edituser", {
            lists: reqquery2[0]
        })
    }
}