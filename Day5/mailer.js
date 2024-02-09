var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "meshackbenard20@gmail.com", //'arunajava567@gmail.com',
    pass: "@Qwerty096", //
  },
});

var mailOptions = {
  from: "meshackbenard30@gmail.com", //'arunajava567@gmail.com',
  to: "meshackbenard20@outlook.com", //'reacharuna302@gmail.com',
  subject: "Sending Email using Node.js",
  text: "That was easy!",
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
