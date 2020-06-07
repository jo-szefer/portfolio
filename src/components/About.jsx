import React from "react";
import styled from "styled-components";

const AboutWrapper = styled.div`
  height: 100vh;
`;

export const Content = styled.span`
  font-size: 20px;
  font-family: sans-serif;
`;
export const Title = styled.h1`
  text-align: center;
  font-family: "Lato", sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding: 30px;
`;

export const About = () => {
  return (
    <AboutWrapper>
      <Title>About</Title>
      <Content>
        I want to be a programmer. I have background in genetics and
        experimental biology. Actually I'm working as a barista in Etno Cafe in
        Wrocław. I know how to make a good coffee with great amount of caffeine
        - that will be very helpful in my programming career. For last few
        months I've been learning how to code. I created a few projects, which
        you can see in my "Projects" card.
      </Content>
    </AboutWrapper>
  );
};
