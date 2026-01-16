const nodemailer = require("nodemailer");
require("dotenv").config();

exports.sendOtpEmail = async (email, otp) => {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
    },
  });

  const mailOptions = {
    from: "DocuDost <yourgmail@gmail.com>",
    to: email,
    subject: "Your OTP Verification Code",
    html: `
      <h2>Your OTP Code</h2>
      <p>Your verification code is:</p>
      <h3>${otp}</h3>
      <p>This OTP will expire in 10 minutes.</p>
    `,
  };

  await transporter.sendMail(mailOptions);
};
