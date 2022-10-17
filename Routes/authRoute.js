const { verifyToken } = require("../Middleware");
const controller = require("../Controller/AuthController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.post(
    "/api/auth/signup",
    [checkSignUp.checkEmailAndUsername, checkSignUp.checkRoles],
    controller.signup
  );

  app.post("/api/auth/signin", controller.signin);
};
