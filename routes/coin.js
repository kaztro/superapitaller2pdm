var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController'),
    AuthController = require('../controllers/AuthController'),
    Auth = require('../middlewares/middleware');

// Create
router.post('/', CoinController.create);

// Read
router.get('/coin', Auth, CoinController.getAll);
router.get('/id/:id', Auth, CoinController.getId);
router.get('/name/:name', Auth, CoinController.getName);
router.get('/country/:country', Auth, CoinController.getCountry);
router.get('/value/:value', Auth, CoinController.getValue);
router.get('/value_us/:value_us', Auth, CoinController.getVU);
router.get('/year/:year', Auth, CoinController.getYear);
router.get('/review/:review', Auth, CoinController.getReview);
router.get('/available/:isAvailable', Auth, CoinController.getAvailable);
router.get('/image/:image', Auth, CoinController.getImage);
router.post('/signup', AuthController.emailSignup);
//router.post('/signin', AuthController.emailLogin)

// Update
router.put('/id/:id', CoinController.update);

// Delete
router.delete('/id/:id', CoinController.delete);

module.exports = router;
