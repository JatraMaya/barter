const { hash, compare } = require("bcrypt");
const { reject } = require("lodash");
const saltRounds = 10;

function hashPassword(password) {
    return new Promise((resolve, reject) => {
        hash(password, saltRounds, (err, hashed) => {
            if (err) reject(err);
            resolve(hashed);
        });
    });
}

function comparePassword(passowrd, hashedPassword) {
    return new Promise((resolve, reject) => {
        compare(passowrd, hashedPassword, (err, result) => {
            if (err) reject(err);
            resolve(result);
        });
    });
}

module.exports = {
    hashPassword,
    comparePassword,
};
