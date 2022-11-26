const express = require("express");
const cors = require("cors");

const app = express();

const db = require("./models");
db.sequelize.sync();

var corsOptions = (origin = "http://localhost:8081");

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.json("Welcome to API");
});

require("./routes/tblbrg.routes")(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server Berjalan di Port ${PORT}... `);
});
