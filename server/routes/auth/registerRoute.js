const router = require("express").Router();
const {newUser} = require("../../controllers/userController")

router.post("/user", newUser);

// router.post("/user", async (req, res) => {
//     const { fullname, username, email, password } = req.body;
//     const user = await db.User.create({
//         fullname,
//         username,
//         email,
//         password,
//     });

//     res.send(user);
// });

module.exports = router;
