const router = require("express").Router();
const { getProfile, addProfile } = require("../../controllers/profileControllers");

router.get("/user/profile/:uuid", getProfile);
router.post("/user/profile/:uuid", addProfile);

module.exports = router;
