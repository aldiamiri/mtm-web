const { tblBrg } = require("./models");

tblBrg
  .create({
    nm_prod: "Asus XXX",
    nm_merk: "Asus",
    desk_brg: "XXX",
    spek_brg: "ZZZ",
  })
  .then((tblbrg) => {
    console.log(tblbrg);
  });
