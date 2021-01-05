const { Profile, User } = require("../../models");

const addProfile = async (req, res) => {
    const body = req.body;
    const { uuid } = req.params;
    //Check profile existance in database
    const isProfileExist = await Profile.findOne({
        include: {
            model: User,
            as: "user",
            where: { uuid },
        },
    });
    //Throw error if profile for user already exist
    if (isProfileExist) return res.status(500).json({ error: "Profile already exist for this user, you can choose to edit the profile instead" });
    const userData = await User.findOne({
        where: {
            uuid,
        },
    });
    body.userId = userData.dataValues.id;
    const userProfile = await Profile.create(body);
    if (!userProfile) return res.sendStatus(500);
    return res.status(200).json(userProfile);
};

module.exports = addProfile;
