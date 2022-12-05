const { tblBrg } = require("./models");

tblBrg
  .create({
    nm_prod: "Asus XXXX",
    nm_merk: "Asus",
    desk_brg: "Tannsasas",
    spek_brg: "Pmddsdsdsmmmm",
    img_brg: "dsdfsfssfsascxcscsfsf",
  })
  .then((tblBrg) => {
    console.log(tblBrg);
  });
