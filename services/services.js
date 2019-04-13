var jwt = require('jwt-simple'),
    moment = require('moment'),
    config = require('../config');

const AuthServices = {};

AuthServices.createToken = function (user) {
    var payload = {
        sub: user._id,
        iat: moment().unix(),
        exp: moment().add(720, "days").unix(),
    };
    return jwt.encode(payload, config.TOKEN_SECRET);
};

AuthServices.decodeToken = function (token) {
    var decoded = new Promise((resolve, reject) => {
        try {
            var payload = jwt.decode(token, config.TOKEN_SECRET);

            if (payload.exp <= moment().unix()) {
                reject({
                    status: 401,
                    message: 'Se te fue el tren arenea'
                })
            }
            resolve(payload.sub)
        } catch (err) {
            reject({
                status: 500,
                message: 'Token Invalido'
            })
        }
    })
    return decoded
}

module.exports = AuthServices;