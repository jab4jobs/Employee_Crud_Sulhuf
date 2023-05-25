const express = require("express");
var bd = require('body-parser')
var jsonParser = bd.json()

const Controllers = require("../Controllers");

const router = express.Router();


router.get('/', Controllers.employees.getAllEmp);

router.get('/:id', Controllers.employees.getEmpById);

router.post('/create', jsonParser, Controllers.employees.createEmp);

router.put('/update/:id', jsonParser,  Controllers.employees.updateEmp);

router.delete('/delete/:id', jsonParser,  Controllers.employees.deleteEmp);

module.exports = router;

