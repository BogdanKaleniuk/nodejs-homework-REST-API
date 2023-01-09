const { User } = require("../../models/user");
const path = require("path");
const fs = require("fs/promises");
const Jimp = require("jimp");
const { createError } = require("../../helpers");

const avatarsDir = path.join(__dirname, "../../", "public", "avatars");

const setAvatar = async (req, res) => {
  const { path: tempUpload, originalname } = req.file;
  const { _id: id } = req.user;
  const imageName = `${id}_${originalname}`;

  const avatar = await Jimp.read(tempUpload);
  avatar.resize(250, 250).write(tempUpload);

  try {
    const resultUpload = path.join(avatarsDir, imageName);

    await fs.rename(tempUpload, resultUpload);

    const avatarURL = path.join("public", "avatars", imageName);

    await User.findByIdAndUpdate(req.user._id, { avatarURL });

    res.json({ avatarURL });
    // if (!req.file) return res.send("Please upload a file");
  } catch (error) {
    await fs.unlink(tempUpload);
    throw createError(401, "Not authorized");
  }
};

module.exports = setAvatar;

// const path = require("path");
// const fs = require("fs/promises");

// const { basedir } = global;
// const { User } = require("../../models/user");
// const { createError, styleImage } = require("../../helpers");

// const avatarDir = path.join(basedir, "public", "avatars");

// const setAvatar = async (req, res) => {
//   try {
//     const { path: tempPath, originalname } = req.file;
//     const { _id: id } = req.user;
//     const newName = `${id}_${originalname}`;

//     const uploadPath = path.join(avatarDir, newName);
//     await styleImage(tempPath);
//     await fs.rename(tempPath, uploadPath);

//     const avatarURL = path.join("avatars", newName);

//     await User.findByIdAndUpdate(req.user._id, { avatarURL });

//     res.json({
//       avatarURL,
//     });
//   } catch (error) {
//     await fs.unlink(req.file.path);
//     throw createError(401, "Not authorized");
//   }
// };

// module.exports = setAvatar;
