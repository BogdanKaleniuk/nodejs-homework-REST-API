const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User, schemas } = require("../../models/user");
const { createError } = require("../../helpers");
const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { error } = schemas.login.validate(req.body);

  if (error) {
    throw createError(400, `Ошибка от Joi или другой библиотеки  валидации`);
  }

  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user || !user.verify) {
    throw createError(401, "Email wrong");
  }

  if (!user.verify) {
    throw createError(401, "Email not verify");
  }

  const comparePassword = await bcryptjs.compare(password, user.password); // true/false
  if (!comparePassword) {
    throw createError(401, "Password wrong");
  }
  const payload = {
    id: user._id,
  };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "24h" });
  await User.findByIdAndUpdate(user._id, { token });
  res.json({
    token,
    email,
    password,
  });
};

module.exports = login;
