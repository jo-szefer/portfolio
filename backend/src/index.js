import express from "express";
import bodyParser from "body-parser";
import { sendEmail } from "./controllers/sendEmail";

const app = express();

app.use(bodyParser.json());

app.post("/email", sendEmail);

app.listen(5000, () => console.log("Listening on port 5000"));
