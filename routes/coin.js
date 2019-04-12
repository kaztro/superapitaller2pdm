var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController');

// Create
router.post('/', CoinController.create);

// Read
router.get('/', CoinController.getAll);
router.get('/id/:id', CoinController.getId);
router.get('/name/:name', CoinController.getName);
router.get('/country/:country', CoinController.getCountry);
router.get('/value/:value', CoinController.getValue);
router.get('/value_us/:value_us', CoinController.getVU);
router.get('/year/:year', CoinController.getYear);
router.get('/review/:review', CoinController.getReview);
router.get('/available/:isAvailable', CoinController.getAvailable);
router.get('/image/:image', CoinController.getImage);

// Update
router.put('/:id', CoinController.update);

// Delete
router.delete('/:id', CoinController.delete);

module.exports = router;
