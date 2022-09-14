const UserController = require("../controllers/user.controller");
const { authenticate } = require("../middlewares/authjwt");

function registerUserRoutes(app) {
  //
  app.post("/api/signup", UserController.signup);
  app.post("/api/login", UserController.login);
  app.get("/api/users", authenticate, UserController.getAllUsers);
  //
  
}

module.exports = registerUserRoutes;
