const userdb = require("../../model/userDB");

module.exports = async (req, res) => {
    await userdb.updateOne(req.query, req.body);
    res.redirect("/admin/userlist");
}