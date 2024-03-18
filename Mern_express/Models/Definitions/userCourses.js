const {Model, DataTypes} = require("sequelize");
const  sequelize = require("../../bin/dbConnection");


class userCourses extends Model {}


userCourses.init({
    userCourseId : {
        primaryKey: true,
        type: DataTypes.STRING(255),
    },
}, {
    timestamps: true,
    paranoid: true,
    sequelize
});


module.exports = userCourses;

