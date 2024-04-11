const express = require('express');
const router = express.Router();
const paycheckCtrl = require('../controllers/paycheck');

// Index: Get all paychecks
router.get('/paychecks', paycheckController.index);

// Show: Get a specific paycheck by ID
router.get('/paychecks/:id', paycheckCtrl.show);

// New: Render form for creating a new paycheck
router.get('/paychecks/new', paycheckCtrl.newPaycheck);

// Create: Add a new paycheck
router.post('/paychecks', paycheckCtrl.create);

// Edit: Render form for editing an existing paycheck
router.get('/paychecks/:id/edit', paycheckCtrl.edit);

// Update: Update an existing paycheck by ID
router.put('/paychecks/:id', paycheckCtrl.update);

// Delete: Delete a paycheck by ID
router.delete('/paychecks/:id', paycheckCtrl.deletePaycheck);

module.exports = router;