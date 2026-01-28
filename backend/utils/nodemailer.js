import nodemailer from "nodemailer";
import { SMTP_EMAIL, SMTP_PASS } from "../config/env.js";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: SMTP_EMAIL,
    pass: SMTP_PASS, //App password banayera halni
  },
});

export const sendMail = async ({ email, subject, html }) => {
  // Parameter email receives value ram@gmail.com
  const result = await transporter.sendMail({
    from: "Aaryan <lazyfox916@gmail.com>",
    to: email,
    subject: subject,
    html: html,
  });
};
