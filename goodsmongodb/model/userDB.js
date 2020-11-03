const mongoose = require("mongoose");
require("../model/DB")
const userSchema = new mongoose.Schema({
    uname: {
        type: String,
        required: true,
        minlength: [2, "不能少于2个字符"],
        maxlength: [20, "不能大于20个字符"],
        trim: true
    },
    upass: {
        type: String,
        required: true,
        minlength: [6, "密码为6~20之间"],
        trim: true
    },
    ubetween: {
        type: [Number, "价格只能为数值"],
        minlength: [10, "电话为10~12之间"],
        maxlength: [12, "电话为10~12之间"],
        trim: true
    },
    uaddress: String,
    udescribe: String
});

const UserDB = mongoose.model("User", userSchema);

module.exports = UserDB;