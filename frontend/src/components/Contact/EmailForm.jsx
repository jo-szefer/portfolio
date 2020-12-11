import React from "react";
import styled from "styled-components";
import { sendMail } from "../../middleware/sendMail";

import { Button } from "../common/Button";

const EmailWrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  margin: auto;
  max-width: 500px;
`;

const FormField = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Email = styled.input`
  outline: none;
  width: 100%;
  color: white;
  background: none;
  cursor: pointer;
  margin: 10px;
  padding: 0.8em;
  border: #ffa5a5;
  border-style: solid;
  border-radius: 0.5rem;
`;

const TextArea = styled.textarea`
  outline: none;
  width: 100%;
  cursor: pointer;
  font-family: Arial, sans-serif;
  margin: 10px;
  padding: 0.8em;
  border: #ffa5a5;
  background: none;
  color: white;
  border-style: solid;
  border-radius: 0.5rem;
`;

export const EmailForm = () => {
  const [address, setAddress] = React.useState("");
  const [message, setMessage] = React.useState("");

  const handleFormSubmit = (event) => {
    event.preventDefault();
    sendMail({ address, message })
      .then(() => alert("Email successfully sent :-)"))
      .catch((status) => alert(`Something went wrong: ${status}`));
  };

  const onEmailChange = (event) => {
    setAddress(event.target.value);
  };
  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  return (
    <EmailWrapper>
      <Form onSubmit={handleFormSubmit}>
        <FormField>
          <Email
            placeholder="e-mail address"
            onChange={onEmailChange}
            type="email"
            name="email"
            required
          />
        </FormField>
        <FormField>
          <TextArea
            placeholder="message"
            onChange={onMessageChange}
            className="stretch"
            name="message"
            rows="5"
            required
          />
        </FormField>
        <Button type="submit">Send</Button>
      </Form>
    </EmailWrapper>
  );
};
