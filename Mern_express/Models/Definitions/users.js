const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");


class USERS extends Model {}


USERS.init({
    userId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    userName: {
        unique: true,
        type: DataTypes.STRING(),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(),
        allowNull: false,
    }
}, {
    timestamps: true,
    paranoid: true,
    sequelize,
});


module.exports = USERS;

