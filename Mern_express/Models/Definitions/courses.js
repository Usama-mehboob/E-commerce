const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");

class Courses extends Model{}

Courses.init({
    coursesID:{
        primaryKey: true,
        type: DataTypes.STRING(),    
    },
    courseTitle: {
        unique: true,
        type: DataTypes.STRING(255),
        allowNull: false
    },
    cousediscrepssion:{
        unique:true,
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps: true,
    paranoid: true,
    sequelize
})


module.exports = Courses;
