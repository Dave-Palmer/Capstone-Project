"use strict";
let Models = require("../models"); //matches index.js

const getItems = (res) => {
  Models.Item.find({})
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const getItem = (req, res) => {
  const { id } = req.params;
  Models.Item.find({ _id: id })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const createItem = (req, res) => {
  console.log(req.file.filename);
  console.log(req.body);
  const { filename } = req.file;
  const { assignedTo, brand, type, description } = req.body;
  const newItem = {
    assignedTo: assignedTo,
    brand: brand,
    type: type,
    description: description,
    photo: process.env.IMG_PATH + filename,
  };
  new Models.Item(newItem)
    .save()
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const updateItem = (req, res) => {
  console.log(req.body);
  Models.Item.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
  })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

const deleteItem = (req, res) => {
  console.log(req.params.id);
  Models.Item.findOneAndDelete({ _id: req.params.id })
    .then((data) => res.send({ result: 200, data: data }))
    .catch((err) => {
      console.log(err);
      res.send({ result: 500, error: err.message });
    });
};

module.exports = {
  createItem,
  deleteItem,
  getItems,
  getItem,
  updateItem,
};
