var express = require('express');
var router = express.Router();
var skillsCtrl = require('../controllers/skills')

// Get request /skills
router.get('/', skillsCtrl.index);
//Get /skills/new
router.get('/new', skillsCtrl.new);
// GET /skills/:id
router.get('/:id', skillsCtrl.show);
// Get /skills/:id/edit
router.get('/:id/edit', skillsCtrl.edit);
// POST /skills
router.post('/', skillsCtrl.create);
// DELETE /skills/:id
router.delete('/:id', skillsCtrl.delete);
// Put /skills/:id
router.put('/:id', skillsCtrl.update);

module.exports = router;
