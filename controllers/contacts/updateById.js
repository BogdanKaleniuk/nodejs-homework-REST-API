const { Contact, schemas } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateById = async (req, res, next) => {
  try {
    const { error } = schemas.add.validate(req.body);
    if (error) {
      throw createError(400, "missing fields");
    }
    const { id } = req.params;
    const result = await Contact.findByIdAndUpdate(id, req.body);

    if (!result) {
      throw createError(404);
    }
    res.json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = updateById;
