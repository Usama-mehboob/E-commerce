const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");


class Role extends Model {}


Role.init({
    roleId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
    rolename: {
        unique: true,
        type: DataTypes.STRING(34),
        allowNull: false,
    },
    
}, {
    timestamps: true,
    paranoid: true,
    sequelize
});

module.exports = Role;

