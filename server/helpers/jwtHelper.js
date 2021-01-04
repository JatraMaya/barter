const {sign, verify} = require('jsonwebtoken')
const SECRET = process.env.JWT_SECRET

const tokenize = (payload) => {
    return sign(payload, SECRET, {expiresIn: '1h'})
}

module.exports = {
    tokenize
}

