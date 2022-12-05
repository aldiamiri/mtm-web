module.exports = (app) => {
  const merk = require("../controllers/merk.controller");

  var router = require("express").Router();

  // Create a new
  router.post("/", merk.create);

  // Retrieve all
  router.get("/", merk.findAll);

  // Retrieve all published
  router.get("/published", merk.findAllPublished);

  // Retrieve a single with id
  router.get("/:id", merk.findOne);

  // Update a with id
  router.put("/:id", merk.update);

  // Delete a with id
  router.delete("/:id", merk.delete);

  // Delete all
  router.delete("/", merk.deleteAll);

  app.use("/api/merk", router);
};
