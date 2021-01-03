const { Op } = require("sequelize");
const { User } = require("../../models");
const { hashPassword } = require("../../helpers/bcryptHelper");

const Register = async (req, res) => {
    const body = req.body;
    try {
        const passwordHash = await hashPassword(body.password);
        body.password = passwordHash;
        const newUser = await User.create(body);
        return res.status(200).json(newUser);
    } catch (err) {
        return res.sendStatus(500).json({ error: err });
    }
};

module.exports = Register;
