var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController');

// Create
router.post('/', CoinController.create);

// Read
router.get('/', CoinController.getAll);
router.get('/:id', CoinController.get);

// Update
router.put('/:id', CoinController.update);

// Delete
router.delete('/:id', CoinController.delete);

module.exports = router;
