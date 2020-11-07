const goodsdb = require("../../model/goodsDB");
const formidable = require("formidable");
let path = require("path");
module.exports = (req, res) => {
    let form = new formidable.IncomingForm();
    form.uploadDir = path.join(__dirname, "../", "../", "public", "uploads");
    form.keepExtensions = true;
    form.parse(req, async (err, fields, files) => {
        console.log(fields);
        console.log(files);
        // console.log(files.gimgs.path.split("public")[1]);
        let result = await goodsdb.create({
            gname: fields.gname,
            gimg: files.gimgs.path.split("public")[1],
            gprice: fields.gprice,
            gpostage: fields.gpostage,
            gdescribe: fields.gdescribe,
            msort: fields.msort,
            ssort: fields.ssort
        })
        if (result) {
            res.redirect("/admin/goodslist");
        }
    })
}