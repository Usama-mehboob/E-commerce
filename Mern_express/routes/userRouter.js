const routes = require("express").Router();
const userRouter = require("../Controller/userController");
// routes.get("/getuser", (req, res) => {
//     res.send("Get All user Api");
// });

routes.post("/createRole", userRouter.createRole);
routes.get("/getRole", userRouter.getRole);
// routes.get("/getAllUser", userRouter.getAllUser);
routes.post("/createUser", userRouter.createUser);
routes.get("/getUser", userRouter.getAllUser);
routes.delete("/deleteUser", userRouter.deleteUser);
routes.patch("/recoverUser", userRouter.recoverUser);
routes.put("/updateUser", userRouter.updatedUser);






module.exports = routes;

// const routes = require("express").Router();

// routes.get("/getuser", (req, res) =>{
//     res.send("Get all user api")
// })

// module.exports = routes;