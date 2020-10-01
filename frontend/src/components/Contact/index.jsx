import React from "react";
import styled from "styled-components";

import githubMark from "../../images/githubMark.png";
import linkedinLogo from "../../images/linkedinLogo.png";
import { Title } from "../common/Title";
import { Content } from "../common/Content";
import { EmailForm } from "./EmailForm";

const ContactWrapper = styled.div`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
`;
const ContactTitle = styled(Title)`
  color: white;
`;
const StyledContent = styled(Content)`
  display: block;
  color: white;
  letter-spacing: 2px;
  text-align: center;
  margin: 10px;
  margin-top: 50px;
`;

const LogosWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const GithubLogo = styled.a`
  content: url(${githubMark});
  margin: 5%;
  max-width: 50px;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;
const LinkedinLogo = styled.a`
  content: url(${linkedinLogo});
  max-width: 50px;
  filter: brightness(100);
  margin: 5%;
  transition: all 0.5s ease-in-out;
  &:hover {
    transform: scale(1.3);
  }
`;

export const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <ContactTitle>Contact</ContactTitle>
      <StyledContent>don't hesitate to send me a message!</StyledContent>
      <EmailForm />
      <LogosWrapper>
        <GithubLogo href="https://github.com" target="_blank" />
        <LinkedinLogo href="https://linkedin.com" target="_blank" />
      </LogosWrapper>
    </ContactWrapper>
  );
};
