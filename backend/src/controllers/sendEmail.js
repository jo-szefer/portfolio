import { sendMail } from "../utils/emailer";

export const sendEmail = async (req, res) => {
  const { address, message } = req.body;

  if (isRequestCorrect(address, message)) {
    try {
      await sendMail(address, message);
      res.sendStatus(200);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server error");
    }
  } else {
    res.status(400).send("No address or message");
  }
};

export const isRequestCorrect = (address, message) => {
  if (
    address &&
    message &&
    typeof message === "string" &&
    typeof address === "string" &&
    isMailCorrect(address)
  ) {
    return true;
  } else {
    return false;
  }
};

const isMailCorrect = (address) => {
  const mailRegex = /^\S+@\S+\.\S+$/;
  return mailRegex.test(address);
};
