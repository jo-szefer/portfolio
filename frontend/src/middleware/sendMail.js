import axios from "axios";

export const sendMail = (data) => {
  return new Promise((res, rej) => {
    axios
      .post("http://localhost:5000/email", data)
      .then((response) => {
        if (response.status === 200) {
          res();
        } else {
          rej(response.status);
        }
      })
      .catch(() => {
        rej("Unknown error");
      });
  });
};
