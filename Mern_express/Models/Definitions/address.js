const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");


class Address extends Model{}


Address.init({
    addressId:{
        primaryKey: true,
        type: DataTypes.STRING(255)
    },
    addressNo:{
        unique: true,
        type: DataTypes.STRING(255),
        
    },
    cityName:{
        unique:true,
        type: DataTypes.STRING(255),
    
    }

}, {
    timestamps: true,
    paranoid: true,
    sequelize
}),



module.exports = Address;
