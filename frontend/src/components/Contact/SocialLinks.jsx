import React from "react";
import styled from "styled-components";

import githubMark from "../../images/githubMark.png";
import linkedinLogo from "../../images/linkedinLogo.png";

const LogosWrapper = styled.div`
  width: -webkit-fill-available;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  margin: 10%;
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

export const SocialLinks = () => (
  <LogosWrapper>
    <GithubLogo href="https://github.com" target="_blank" />
    <LinkedinLogo href="https://linkedin.com" target="_blank" />
  </LogosWrapper>
);
