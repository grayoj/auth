const { jwtAuth } = require("../middleware");
const controller = require("../Controller/userController");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get("/api/test/user", [jwtAuth.verifyToken], controller.userBoard);

  app.get(
    "/api/test/mod",
    [jwtAuth.verifyToken, jwtAuth.isModerator],
    controller.moderatorBoard
  );

  app.get(
    "/api/test/admin",
    [jwtAuth.verifyToken, jwtAuth.isAdmin],
    controller.adminBoard
  );
};
