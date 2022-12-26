const { Contact } = require("../../models/contact");
const { createError } = require("../../helpers");

const updateStatusContact = async (req, res, next) => {
  try {
    const { id } = req.params;

    const result = await Contact.findByIdAndUpdate(id, req.body, {
      new: true,
    });

    if (!result) {
      throw createError(404);
    }
    res.json({
      status: "success",
      code: 200,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateStatusContact;
