const { Profile, User } = require("../../models");

const getProfile = async (req, res) => {
    const dataProfile = await Profile.findOne({
        include: {
            model: User,
            as: "user",
            where: {
                uuid: req.params.uuid,
            },
            attributes: ["uuid", "username"],
        },
        attributes: ["fullName", "city", "address", "phoneNumber", "urlPicture"],
    });
    if (!dataProfile) return res.status(500).json({ error: "Profile not found" });
    return res.send(dataProfile);
};

module.exports = getProfile;
