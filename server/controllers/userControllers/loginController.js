const { Op } = require("sequelize");
const { User } = require("../../models");
const { comparePassword } = require("../../helpers/bcryptHelper");
const { tokenize } = require("../../helpers/jwtHelper");
const checkCredential = require("../../helpers/credentialHelper");

const Login = async (req, res) => {
    const { password } = req.body;
    const { username, email } = checkCredential(req.body);
    // Check user existance on database
    const isUserExist = await User.findOne({
        where: {
            [Op.or]: [{ username }, { email }],
        },
    });
    // Throw error message if user not found
    if (!isUserExist) return res.status(500).json({ error: "User unauthorize!" });
    const user = JSON.parse(JSON.stringify(isUserExist));
    const isPasswordValid = await comparePassword(password, user.password);
    if (isPasswordValid) {
        const token = tokenize(user);
        user.token = token;
        return res.status(200).json(user);
    }
    return res.status(500).json({ error: "User unauthorize!" });
};

module.exports = Login;
