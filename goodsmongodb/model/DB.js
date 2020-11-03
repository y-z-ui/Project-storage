const mongoose = require("mongoose");

const DB = mongoose.connect("mongodb://localhost/Goods", {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

DB.then(() => {
    console.log("数据库连接成功》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》");
}, () => {
    console.log("数据库连接失败》》》》》》》》》》》》》》》》》》》》》》》》》》》》》》");
});