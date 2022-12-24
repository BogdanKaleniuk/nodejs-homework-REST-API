const mongoose = require("mongoose");

console.log(process.env);

const { DB_HOST } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));
