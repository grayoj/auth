// Declare and import config
const config = require("../Config/db.config");
// Init sequelize
const Sequelize = require("sequelize");

const sequelize = new Sequelize(config.DB, config.USER, config.PASSWORD, {
  host: config.HOST,
  dialect: config.dialect,
  operatorAliases: false,
  pool: {
    max: config.pool.max,
    min: config.pool.min,
    acquire: config.pool.acquire,
    idle: config.pool.idle,
  },
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require("../Models/userModel")(sequelize, Sequelize);

db.role = require("../Models/roleModel")(sequelize, Sequelize);
// Associate User and Roles using a many to many
// relationship, where a user can have several roles
// a role could be occupied by many users
db.role.belongsToMany(db.user, {
  through: "user_roles",
  foreignKey: "roleId",

  OtherKey: "userId",
});

db.user.belongsToMany(db.role, {
  through: "user_roles",
  foreignKey: "userId",

  OtherKey: "roleId",
});

db.ROLES = ["user", "admin"];

module.exports = db;
