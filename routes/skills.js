var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

// Get request /todos
router.get('/', skillsCtrl.index);
//Get /todos/:id
router.get('/:id', skillsCtrl.show);

module.exports = router;
