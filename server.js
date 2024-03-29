// Import all modules for auth
const express = require("express");
const sequelize = require("sequelize");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./Models");
//
const Role = db.role;
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

// Set up port config for express
const PORT = process.env.PORT || 5000;

// Initialise express application
const app = express();

// Use CORS options
// app.use(cors(corsOptions));

// Create middleware
app.use(express.json());
// The extended syntax allows for rich objects and arrays
// to be encoded into the URL encoded format
// to allow a JSON experience
app.use(express.urlencoded({ extended: true }));
// Telling our express app to collect, set, and store cookies.
app.use(cookieParser());

// get page
app.get("/", (req, res) => {
  res.json({ message: "The app is working!" });
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });
  Role.create({
    id: 2,
    name: "admin",
  });
}

// Routes
require("./Routes/authRoute");
require("./Routes/userRoute");

// Listen to server connection
app.listen(PORT, () => {
  console.log(`Server is connected on ${PORT}`);
});
