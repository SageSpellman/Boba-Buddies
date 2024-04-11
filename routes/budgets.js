const express = require('express');
const router = express.Router();
// You'll be creating this controller module next
const budgetsCtrl = require('../controller/bugets');

	
// GET /expenses
router.get('/', budgetsCtrl.index);
// GET /expenses/new
router.get('/new', budgetsCtrl.new);
// GET /expenses/:id (show functionality) MUST be below new route
router.get('/:id', budgetsCtrl.show);
// POST /expenses
router.post('/', budgetsCtrl.create);

router.get('/:id/edit', budgetsCtrl.edit);

router.put('/:id', budgetsCtrl.update);

router.delete('/:id', budgetsCtrl.delete);

module.exports = router;


