const mongoose = require("mongoose");
const dotevn = require("dotenv");

dotevn.config();

console.log(process.env);

const { DB_HOST } = process.env;
console.log(DB_HOST);
mongoose
  .connect(DB_HOST)
  .then(() => console.log("Database connection successful"))
  .catch((error) => console.log(error.message));
