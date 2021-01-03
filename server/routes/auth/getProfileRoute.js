const router = require("express").Router();
const { Profile, User } = require("../../models");

router.get("/profile", async (req, res) => {
    const dataProfile = await User.findOne({
        include: { model: Profile, attributes: ["fullname", "city", "address", "phoneNumber", "urlPicture"] },
    });
    return res.send(dataProfile);
});

module.exports = router;
