const userdb = require("../../model/userDB");
const md5 = require("md5");
module.exports = (req, res) => {
    let user = {
        uname: req.body.uname,
        upass: md5(req.body.upass),
        ubetween: req.body.ubetween,
        uaddress: req.body.uaddress,
        udescribe: req.body.udescribe
    }
    userdb.create(user);
    res.redirect("/admin/userlist")
}