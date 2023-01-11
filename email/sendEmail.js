// імпортуємо мейл
const sgMail = require("@sendgrid/mail");
require("dotenv").config();
// забираємо ключ
const { SENDGRID_API_KEY } = process.env;
// добавляємо ключ
sgMail.setApiKey(SENDGRID_API_KEY);

const sendEmail = async (data) => {
  try {
    const msg = { ...data, from: "bogdankaleniuk@meta.ua" };
    await sgMail.send(msg);
    return true;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

module.exports = sendEmail;

// const email = {
//   to: "kaleniukbogdan@ukr.net",
//   from: "bogdankaleniuk@meta.ua",
//   subject: "Sending with Twilio SendGrid is Fun",
//   text: "and easy to do anywhere, even with Node.js",
//   html: "<strong>and easy to do anywhere, even with Node.js</strong>",
// };

// sgMail
//   .send(email)
//   .then(() => console.log("Email send"))
//   .catch((error) => console.log(error.message));
