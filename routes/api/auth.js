const express = require("express");
const { auth, upload } = require("../../middlewares");
const ctrl = require("../../controllers/auth");
const { ctrlWrapper } = require("../../helpers");
const router = express.Router();

router.post("/register", ctrlWrapper(ctrl.register));

router.post("/login", ctrlWrapper(ctrl.login));

router.get("/current", auth, ctrlWrapper(ctrl.getCurrent));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

router.patch(
  "/avatars",
  auth,
  upload.single("avatar"),
  ctrlWrapper(ctrl.setAvatar)
);
module.exports = router;
