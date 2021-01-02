const User = require("../models").User;

const newUser = async (req, res) => {
    try {
        const user = await User.create(req.body);
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

const getUser = async (req, res) => {
    try {
        const user = await User.findAll();
        return res.status(200).json(user);
    } catch (err) {
        return res.status(500).json({ error: err.message });
    }
};

module.exports = {
    newUser,
    getUser,
};
