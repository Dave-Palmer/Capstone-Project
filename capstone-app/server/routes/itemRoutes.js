let express = require("express");
let router = express.Router();
let Controllers = require("../controllers"); //index.js
let uploadFile = require('../middleware/uploads')

router.get('/', (req, res) => {
    Controllers.itemController.getItems(res);
})

router.get('/:id', (req, res) => {
    Controllers.itemController.getItem(req, res);
})

router.post('/create', uploadFile, (req, res) => {
    Controllers.itemController.createItem(req, res)
})

router.put('/:id', (req, res) => {
    Controllers.itemController.updateItem(req, res)
})
router.delete('/:id', (req, res) => {
    Controllers.itemController.deleteItem(req, res)
})

module.exports = router;