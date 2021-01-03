const { Op } = require("sequelize");
const { User } = require("../../models");
const { hashPassword } = require("../../helpers/bcryptHelper");

const Register = async (req, res) => {
    const body = req.body;
    try {
        const passwordHash = await hashPassword(body.password);
        body.password = passwordHash;
        const isUsernameExist = await User.findOne({
            where: {
                username: body.username,
            },
        });
        if (isUsernameExist) return res.status(500).json({ error: "Username already taken" });
        const newUser = await User.create(body);
        return res.status(200).json(newUser);
    } catch (err) {
        if (err.name === "SequelizeUniqueConstraintError") return res.status(500).json({ error: "Email is already use" });
        if (err.name === "SequelizeValidationError") return res.status(500).json({ error: "Please enter a valid email address" });
        return res.status(500).json(err);
    }
};

module.exports = Register;
