import axios from "axios";

export const sendMail = (data) => {
  axios
    .post("/mail", data)
    .then((response) => console.log(response.status))
    .catch((error) => console.log(error));
};
