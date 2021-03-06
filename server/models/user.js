"use strict";
const { Model } = require("sequelize");
const { nanoid } = require("nanoid");
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.hasOne(models.Profile);
        }
        toJSON() {
            return { ...this.get(), id: undefined, updatedAt: undefined, createdAt: undefined };
        }
    }
    User.init(
        {
            uuid: {
                type: DataTypes.UUID,
                defaultValue: nanoid,
            },
            username: DataTypes.STRING,
            email: {
                type: DataTypes.STRING,
                validate: {
                    isEmail: { msg: "Please input a valide email addres" },
                },
            },
            password: DataTypes.STRING,
            isActive: DataTypes.BOOLEAN,
        },
        {
            sequelize,
            modelName: "User",
        }
    );
    return User;
};
