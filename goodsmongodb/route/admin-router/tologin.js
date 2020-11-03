const userdb = require("../../model/userDB");
const md5 = require("md5");
module.exports = async (req, res) => {
    console.log(req.body)
    let username = await userdb.findOne({
        uname: req.body.username
    })
    let password = await userdb.findOne({
        upass: md5(req.body.password)
    })

    if (!username) {
        res.send("<script>alert('账号不存在');window.location.href='/admin/login';</script>")
    } else if (!password) {
        res.send("<script>alert('密码输入错误');window.location.href='/admin/login';</script>")
    } else {
        req.session.username = req.body.username;
        req.app.locals.username = req.body.username;
        res.redirect("/admin/userlist");
    }

}