import nodemailer from "nodemailer";

const smtpTransport = nodemailer.createTransport({
  service: "Google",
  host: "smtp.gmail.com",
  port: 465,
  auth: {
    user: process.env.GOOGLE_ID,
    pass: process.env.GOOGLE_TOKEN,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

export default smtpTransport;
