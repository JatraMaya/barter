const router = require("express").Router();
const { getUser } = require("../../controllers/userController");

router.get("/user", getUser);

module.exports = router;
