const goodsdb = require("../../model/goodsDB");
const formidable = require("formidable");
let path = require("path");
module.exports = (req, res) => {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        // console.log(fields);
        // console.log(files);
        // console.log(files.gimgs.path.split("public")[1]);
        let thisgimg = (await goodsdb.find(req.query))[0].gimg
        let result = await goodsdb.updateOne(req.query, {
            gname: fields.gname,
            gimg: files.gimgs.name != "" ? files.gimgs.path.split("public")[1] : thisgimg,
            gprice: fields.gprice,
            gpostage: fields.gpostage,
            gdescribe: fields.gdescribe
        })
        if (result) {
            res.redirect("/admin/goodslist");
        }
    })
}