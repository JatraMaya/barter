"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Profile extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User, { foreignKey: "userId", as: "user" });
        }
        toJSON() {
            return { ...this.get(), id: undefined };
        }
    }
    Profile.init(
        {
            fullName: DataTypes.STRING,
            city: DataTypes.STRING,
            address: DataTypes.STRING,
            urlPicture: DataTypes.STRING,
            phoneNumber: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: "Profile",
        }
    );
    return Profile;
};
