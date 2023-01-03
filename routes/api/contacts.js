const express = require("express");
const { auth } = require("../../middlewares");
const ctrl = require("../../controllers/contacts");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getAll));

router.get("/:id", auth, ctrlWrapper(ctrl.getById));

router.post("/", auth, ctrlWrapper(ctrl.add));

router.put("/:id", auth, ctrlWrapper(ctrl.updateById));

router.patch("/:id/favorite", auth, ctrlWrapper(ctrl.updateStatusContact));

router.delete("/:id", auth, ctrlWrapper(ctrl.removeById));

module.exports = router;
