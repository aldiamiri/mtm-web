module.exports = (app) => {
  const barang = require("../controllers/tblbrg.controller");

  var router = require("express").Router();

  // Create a new
  router.post("/", barang.create);

  // Retrieve all
  router.get("/", barang.findAll);

  // Retrieve all published
  router.get("/published", barang.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", barang.findOne);

  // Update a with id
  router.put("/:id", barang.update);

  // Delete a with id
  router.delete("/:id", barang.delete);

  // Delete all
  router.delete("/", barang.deleteAll);

  app.use("/api/barang", router);
};
