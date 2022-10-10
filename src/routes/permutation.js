const express = require('express');
const permutationController = require('../controllers/permutation');

const router = express.Router();

router.post('/find', permutationController.findWordsInSubstring);

module.exports = router;
