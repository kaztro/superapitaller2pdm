const coinModel = require('../models/Coin');

const CoinController = {};

CoinController.create = function (req, res) {
    let data = {
        name: req.body.name,
        country: req.body.country,
        value: req.body.value,
        value_us: req.body.value_us,
        year: req.body.year,
        review: req.body.review,
        isAvailable: req.body.isAvailable,
        image: req.body.image
    };
    let newCoin = new coinModel(data);

    newCoin.save(function (err, guardado) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, message: 'Se ha guardado con exito', guardado });
        }
    });
};

CoinController.getAll = function (req, res) {
    coinModel.find({}, function (err, coins) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, posts: coins });
        }
    });
};

CoinController.getId = function (req, res) {
    coinModel.findOne({ _id: req.params.id }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getName = function (req, res) {
    coinModel.find({ name: {$regex: `.*${req.params.name}.*`}  }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getCountry = function (req, res) {
    coinModel.findOne({ country: req.params.country }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getValue = function (req, res) {
    coinModel.find({ value: {$regex: `.*${req.params.value}.*`}  }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getVU = function (req, res) {
    coinModel.find({ value_us: {$regex: `.*${req.params.value_us}.*`}  }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getYear = function (req, res) {
    coinModel.find({ year: req.params.year }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getReview = function (req, res) {
    coinModel.findOne({ review: req.params.review }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getAvailable = function (req, res) {
    coinModel.find({ isAvailable: req.params.isAvailable }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.getImage = function (req, res) {
    coinModel.findOne({ image: req.params.image }, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

CoinController.update = function (req, res) {
    let update = {
        name: req.body.name,
        country: req.body.country,
        value: req.body.value,
        value_us: req.body.value_us,
        year: req.body.year,
        review: req.body.review,
        isAvailable: req.body.isAvailable,
        image: req.body.image
    };
    coinModel.findByIdAndUpdate(req.params.id, update, function (err, old) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, old, update });
        }
    });
};


CoinController.delete = function (req, res) {
    coinModel.findByIdAndRemove(req.params.id, function (err, deleted) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, deleted });
        }
    });
};

module.exports = CoinController;