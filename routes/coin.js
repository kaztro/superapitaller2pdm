var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController');

// Create
router.post('/', CoinController.create);

// Read
router.get('/', CoinController.getAll);
router.get('/:id', CoinController.getId);
router.get('/:name', CoinController.getName);
router.get('/:country', CoinController.getCountry);
router.get('/:value', CoinController.getValue);
router.get('/:value_us', CoinController.getVU);
router.get('/:year', CoinController.getYear);
router.get('/:review', CoinController.getReview);
router.get('/:isAvailable', CoinController.getAvailable);
router.get('/:image', CoinController.getImage);

// Update
router.put('/:id', CoinController.update);

// Delete
router.delete('/:id', CoinController.delete);

module.exports = router;
