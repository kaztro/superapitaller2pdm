const mongoose = require('mongoose'),
    coinModel = require('../models/Coin');

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

CoinController.getID = function (req, res) {
    useParamToSearch({ _id: req.params.id });
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

let useParamToSearch = function (param) {
    coinModel.findOne(param, function (err, coin) {
        if (err) {
            res.status(500);
            res.json({ code: 500, err });
        } else {
            res.json({ ok: true, post: coin });
        }
    });
}

module.exports = CoinController;