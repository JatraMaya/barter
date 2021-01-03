const router = require("express").Router();
// const {User} = require("../../models");
// const {hashPassword} = require("../../helpers/bcryptHelper")
const registerUser = require("../../controllers/userControllers/registerController")


router.post("/user", registerUser)

// router.post("/user", async (req, res) => {
//     const { fullname, username, email, password } = req.body;
//     const passwordHash = await hashPassword(password)
//     const user = await User.create({
//         fullname,
//         username,
//         email,
//         password:passwordHash,
//     });

//     return res.send(user);
// });

module.exports = router;
