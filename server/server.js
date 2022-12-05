const express = require("express");
const cors = require("cors");
const app = express();
const multer = require("multer");
const bodyParser = require("body-parser");

const db = require("./models");
db.sequelize.sync();

var corsOptions = (origin = "http://localhost:8081");

// CONFIG MULTER
const fileStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "images");
  },
  filename: function (req, file, cb) {
    cb(null, new Date().getTime() + "-" + file.originalname);
  },
});

const filter = (req, file, cb) => {
  if (file.mimetype === "image/png" || file.mimetype === "image/jpg" || file.mimetype === "image/jpeg") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

app.use(multer({ storage: fileStorage, fileFilter: filter }).single("img_brg"));
// <---------------------------------------------------------------------->

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to API");
});

require("./routes/merk.routes")(app);
require("./routes/tblbrg.routes")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Berjalan di Port ${PORT}... `);
});
