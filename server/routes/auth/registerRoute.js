const router = require("express").Router();
const { Register } = require("../../controllers/userControllers");

router.post("/user", Register);

module.exports = router;
