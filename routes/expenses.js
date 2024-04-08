const express = require('express');
const router = express.Router();
const Expense = require('../models/expense');

// Get all expenses
router.get('/', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.send(expenses.map(expense => `${expense.name} - ${expense.amount} - ${expense.category}`).join('\n'));
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Get a single expense by ID
router.get('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).send('Expense not found');
    }
    res.send(`${expense.name} - ${expense.amount} - ${expense.category}`);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// Create a new expense
router.post('/', async (req, res) => {
  const expense = new Expense({
    name: req.body.name,
    amount: req.body.amount,
    category: req.body.category
  });

  try {
    const newExpense = await expense.save();
    res.status(201).send('Expense created successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Update an expense
router.patch('/:id', async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id);
    if (!expense) {
      return res.status(404).send('Expense not found');
    }
    if (req.body.name != null) {
      expense.name = req.body.name;
    }
    if (req.body.amount != null) {
      expense.amount = req.body.amount;
    }
    if (req.body.category != null) {
      expense.category = req.body.category;
    }
    await expense.save();
    res.send('Expense updated successfully');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// Delete an expense
router.delete('/:id', async (req, res) => {
  try {
    const deletedExpense = await Expense.findByIdAndRemove(req.params.id);
    if (!deletedExpense) {
      return res.status(404).send('Expense not found');
    }
    res.send('Expense deleted successfully');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

