import nodemailer from "nodemailer";

export const sendMail = (address, message) =>
  new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    transporter.sendMail(
      {
        from: address,
        to: process.env.TO_EMAIL,
        subject: "Question",
        text: `from ${address} \n ${message}`,
      },
      (error) => {
        if (error) {
          rej(error);
        } else {
          res();
        }
      }
    );
  });
