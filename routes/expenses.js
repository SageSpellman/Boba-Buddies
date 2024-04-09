const express = require('express');
const router = express.Router();

// Require the controller that exports CRUD functions
var expensesCtrl = require('../controller/expenses');

// All actual paths begin with "/exspenses"
// GET /todos
router.get('/', expensesCtrl.index);

router.get('/new', ensureLoggedIn, expensesCtrl.new);

router.get('/:id', ensureLoggedIn, expensesCtrl.show);

router.post('/', ensureLoggedIn, expensesCtrl.create);

router.delete('/:id', ensureLoggedIn, expensesCtrl.delete);

module.exports = router;


