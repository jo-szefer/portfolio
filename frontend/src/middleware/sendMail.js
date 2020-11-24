import axios from "axios";

export const sendMail = (data) => {
  return new Promise((res, rej) => {
    axios
      .post("/email", data)
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
