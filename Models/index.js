// import the orm
const { Sequelize, DataTypes } = require("sequelize");

// Database connection to postgres.
// Default Port for Postgres is 5433
// Database name is: pencom-arc

const sequelize = new Sequelize(
  `postgres://postgres:admin@127.0.0.1:5432/pencom-arc, 
    {dialect: "postgres"}`
);

// Validate connection
sequelize
  .authenticate()
  .then(() => {
    console.log(`Connected to the pencom-arc`);
  })
  .catch((errors) => {
    // Catch errors
    console.log(errors);
  });

// Create a sequelize instance for const db
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// connect to the model
db.users = require("./userModel")(sequelize, DataTypes);

// export module
module.exports = db;
