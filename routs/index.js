const { Router } = require("express");
const path = require("path");
const multer = require("multer");
const router = Router();

const storage = multer.diskStorage({
  destination: function(req, file, callback) {
    const url = "./public/uploads";
    callback(null, url);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  }
});
const upload = multer({ storage: storage }).array("image");
router.post("/file", (req, res) => {
  upload(req, res, err => {
    if (req.files) {
      console.log(req.body);
      console.log(req.files);
    }

    res.redirect("/");
  });
});

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public", "index.html"));
});

module.exports = router;
