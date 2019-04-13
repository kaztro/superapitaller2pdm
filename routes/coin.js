var express = require('express'),
    router = express.Router(),
    CoinController = require('../controllers/CoinController'),
    AuthController = require('../controllers/AuthController'),
    Auth = require('../middlewares/middleware');

// Create
router.post('/', CoinController.create);

// Read
router.get('/coin', CoinController.getAll);
router.get('/id/:id', CoinController.getId);
router.get('/name/:name', CoinController.getName);
router.get('/country/:country', CoinController.getCountry);
router.get('/value/:value', CoinController.getValue);
router.get('/value_us/:value_us', CoinController.getVU);
router.get('/year/:year', CoinController.getYear);
router.get('/review/:review', CoinController.getReview);
router.get('/available/:isAvailable', CoinController.getAvailable);
router.get('/image/:image', CoinController.getImage);
router.post('/signup', AuthController.emailSignup);
router.post('/signin', AuthController.emailLogin)
router.get('/private', Auth, (req, res) => { res.status(200).send({ message: 'Estas dentro we' }) });

// Update
router.put('/id/:id', CoinController.update);

// Delete
router.delete('/id/:id', CoinController.delete);

module.exports = router;
