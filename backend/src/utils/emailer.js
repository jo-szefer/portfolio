import nodemailer from "nodemailer";

export const sendMail = (address, message) =>
  new Promise((res, rej) => {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "",
        pass: "",
      },
    });

    transporter.sendMail(
      {
        from: address,
        to: "",
        subject: "Question",
        text: message,
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
