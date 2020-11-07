const mongoose = require("mongoose");

const goodsSchema = new mongoose.Schema({
    gname: {
        type: String,
        required: true,
        minlength: [2, "不能少于2个字符"],
        maxlength: [20, "不能大于20个字符"],
        trim: true
    },
    gimg: String,
    gprice: {
        type: [Number, "价格只能为数值"]
    },
    gpostage: {
        type: [Number, "邮费只能为数值"]
    },
    gdescribe: String,
    msort: String,
    ssort:String
});

const GoodsDB = mongoose.model("Goods", goodsSchema);

module.exports = GoodsDB;