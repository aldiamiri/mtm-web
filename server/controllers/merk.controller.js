const { Merk } = require("../models");
const { Op } = require("sequelize");

// Create and Save a new Data
exports.create = (req, res) => {
  // Validate request
  if (!req.body.nm_merk) {
    res.status(400).send({
      message: "Content cannot empty!",
    });
    return;
  }

  // Create a Data
  const createTbl = {
    nm_merk: req.body.nm_merk,
  };

  // Save Data in the database
  Merk.create(createTbl)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating Merk.",
      });
    });
};

// Retrieve all Data from the database.
exports.findAll = (req, res) => {
  const nmmerk = req.query.nmmerk;
  var condition = nmmerk ? { nmmerk: { [Op.iLike]: `%${nmmerk}%` } } : null;
  Merk.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Barang",
      });
    });
};

// Find a single Data with an id
exports.findOne = (req, res) => {
  const id = req.params.id;
  Merk.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Merk with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Merk with id=" + id,
      });
    });
};

// Update a Data by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Merk.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Merk Barang was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Merk with id=${id}. Maybe Data Barang was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Data Merk with id=" + id,
      });
    });
};

// Delete a Data with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Merk.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Merk was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Data Merk with id=${id}. Maybe Merk was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Data Merk with id=" + id,
      });
    });
};

// Delete all Data from the database.
exports.deleteAll = (req, res) => {
  Merk.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} All Data Barang were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all Data Barang.",
      });
    });
};

// Find all published Data
exports.findAllPublished = (req, res) => {
  Merk.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Data Barang.",
      });
    });
};
