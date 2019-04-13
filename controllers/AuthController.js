'use strict'

var service = require('../services/services');
var User = require('../models/User')

const UserController = {};

UserController.emailSignup = function (req, res) {
    var user = new User({
        email: req.body.email,
        password: req.body.password
    })
    user.save(err => {
        if (err) return res.status(500).send({ message: 'La regue man no se que paso: ${err}' })
        return res.status(201).send({ token: service.createToken(user) })
    })
}

UserController.emailLogin = function (req, res) {
    User.find({ email: req.body.email.toLowerCase() }, (err, user) => {
        if (err) return res.status(500).send({ message: err })
        if (!user) return res.status(404).send({ message: 'No existe el usuario' })
        req.user = user
        res.status(200).send({
            message: 'Bien hecho ve y cuentale a tu madre',
            token: service.createToken(user)
        });
    });
};

module.exports = UserController;