const express = require("express");
const router = express.Router();
// 登录界面
router.get("/login", require("./admin-router/login"));
router.post("/tologin", require("./admin-router/tologin"))
// 增加商品
router.get("/addgoods", require("./admin-router/addgoods"));
router.post("/goodslist", require("./admin-router/toaddgoods"))
// 商品列表
router.get("/goodslist", require("./admin-router/goodslist"));
// 增加用户
router.get("/adduser", require("./admin-router/adduser"));
router.post("/userlist", require("./admin-router/toadduser"));
// 用户列表
router.get("/userlist", require("./admin-router/userlist"));
// 删除列表
router.get("/delete", require("./admin-router/delete"));
// 修改列表
router.get("/edit", require("./admin-router/edit"));
router.post("/updategoods", require("./admin-router/updategoods"));
router.post("/updateuser", require("./admin-router/updateuser"));
// 搜索列表
router.get("/usersearch", require("./admin-router/usersearch"))
router.get("/goodssearch", require("./admin-router/goodssearch"))
router.get("/goodssort", require("./admin-router/goodssort"))
//安全退出
router.get("/signout", require("./admin-router/signout"));
module.exports = router;