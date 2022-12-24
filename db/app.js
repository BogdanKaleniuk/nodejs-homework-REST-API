const mongoose = require("mongoose");

const { DB_HOST } = require("./config");

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));
