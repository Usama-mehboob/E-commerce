const  sequelize = require("../bin/dbConnection");

const USERS = require("./Definitions/users");
const Role = require("./Definitions/role");
const Address = require("./Definitions/address");
const Courses = require("./Definitions/courses");
const userCourses = require("./Definitions/userCourses");

//relation  datbase connection 
Address.hasOne(USERS, {foreignKey: "addressId"});
USERS.belongsTo(Address, {foreignKey: "addressId"});

Role.hasMany(USERS, {foreignKey: "roleId"});
USERS.belongsTo(Role, {foreignKey: "roleId"});

userCourses.hasMany(USERS, {foreignKey: "userCourseId"});
USERS.belongsTo(userCourses, {foreignKey: "userCourseId"});
userCourses.hasMany(Courses, {foreignKey: "userCourseId"});
Courses.belongsTo(userCourses, {foreignKey: "userCourseId"})


const models = {
    users: USERS,
    address: Address,
    couse: Courses,
    role :Role,
    userCourses: userCourses
};

const db ={};
db.sequelize = sequelize;   
models.sequelize = models;


module.exports = {db, models};