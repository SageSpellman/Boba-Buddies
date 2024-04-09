const express = require('express');
const router = express.Router();
const expensesCtrl = require('../controller/expenses');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// All actual paths begin with "/exspenses"
// GET /todos
router.get('/', expensesCtrl.index);

router.get('/new', ensureLoggedIn, expensesCtrl.new);

router.get('/:id', ensureLoggedIn, expensesCtrl.show);

router.post('/', ensureLoggedIn, expensesCtrl.create);

router.delete('/:id', ensureLoggedIn, expensesCtrl.delete);

module.exports = router;


