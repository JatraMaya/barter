const { Op } = require("sequelize");
const { User } = require("../../models");
// const { comparePassword } = require("../../helpers/bcryptHelper");
// const { sign } = require("jsonwebtoken");
const checkCredential = require("../../helpers/credentialHelper");

const Login = async (req, res) => {
    const { username, email } = checkCredential(req.body);
    const isUserExist = await User.findOne({
        where: {
            [Op.or]: [{ username }, { email }],
        },
    });
    const userData = JSON.parse(JSON.stringify(isUserExist));
    console.log(userData);
    return res.status(200).json(isUserExist);
};

module.exports = Login;
