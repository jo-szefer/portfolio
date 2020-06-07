import React from "react";
import styled from "styled-components";

import { sendMail } from "../middleware/sendMail";
import { Title } from "./About";
import { Content } from "./About";

const EmailWrapper = styled.div``;

const ContactTitle = styled(Title)`
  color: white;
`;

const FormField = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TextArea = styled.textarea`
  width: 70vw;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  padding: 0.8em;
  border: rgb(247, 78, 161);
  background: none;
  color: white;

  border-style: solid;
  border-radius: 0.5rem;
`;
const Email = styled.input`
  color: white;
  background: none;
  cursor: pointer;
  padding: 10px;
  margin: 10px;
  padding: 0.8em;
  border: rgb(247, 78, 161);
  text-align: center;
  border-style: solid;
  border-radius: 0.5rem;
  &::placerholder {
    font-size: 36px;
  }
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #090a0f inset !important;
  }
  &:-webkit-autofill {
    -webkit-text-fill-color: white !important;
  }
`;
const ButtonSend = styled.button`
  cursor: pointer;
  padding: 10px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  padding: 1em;
  color: rgb(247, 78, 161);
  background: none;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  margin: 0 auto;
  border-style: solid;
  border-color: rgb(247, 78, 161);
  border-radius: 0.5rem;
  transition: background-color 0.25s ease 0s, color 0.25s ease 0s;
  &:hover {
    background-color: rgb(247, 78, 161);
    color: rgb(255, 255, 255);
  }
`;

const StyledContent = styled(Content)`
  display: block;
  color: white;
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  text-align: center;
  margin: 10px;
  margin-top: 50px;
`;

const ContactWrapper = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
`;
export const Contact = () => {
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  const sendEmail = (event) => {
    event.preventDefault();
    sendMail({ email, message });
  };

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };
  return (
    <ContactWrapper>
      <ContactTitle>Contact</ContactTitle>
      <StyledContent>don't hesitate to send me a message!</StyledContent>
      <EmailWrapper>
        <form onSubmit={sendEmail}>
          <FormField>
            <label htmlFor="email">
              <Email
                placeholder="Mail"
                onChange={onEmailChange}
                type="email"
                name="email"
                required
              />
            </label>
          </FormField>

          <FormField>
            <label htmlFor="message">
              <TextArea
                placeholder="Message"
                onChange={onMessageChange}
                className="stretch"
                name="message"
                rows="5"
                required
              />
            </label>
          </FormField>

          <ButtonSend type="submit">Send</ButtonSend>
        </form>
      </EmailWrapper>
    </ContactWrapper>
  );
};
