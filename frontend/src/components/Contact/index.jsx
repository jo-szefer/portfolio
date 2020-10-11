import React from "react";
import styled from "styled-components";

import { Section } from "../common/Section";
import { Content } from "../common/Content";
import { EmailForm } from "./EmailForm";
import { SocialLinks } from "./SocialLinks";

const Message = styled(Content)`
  display: block;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  margin: 10px;
  margin-top: 50px;
`;

export const Contact = () => {
  return (
    <Section id="contact" isLight={false} title="contact">
      <Message>Don't hesitate to send me a message!</Message>
      <EmailForm />
      <SocialLinks />
    </Section>
  );
};
