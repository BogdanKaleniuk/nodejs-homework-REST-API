const express = require("express");
const ctrl = require("../../controllers/contacts"); 
const router = express.Router(); 
const { ctrlWrapper } = require("../../helpers");

router.get("/", ctrlWrapper(ctrl.getAll));

router.get("/:id", ctrlWrapper(ctrl.getById));

router.post("/", ctrlWrapper(ctrl.add));

router.put("/:id", ctrlWrapper(ctrl.updateById));

router.delete("/:id", ctrlWrapper(ctrl.removeById));

router.patch("/:id/favorite", ctrlWrapper(ctrl.updateStatusContact));

module.exports = router;
