import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
`;

const Background = styled.div`
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  content: "";
  position: absolute;
  display: block;
  background-image: url(https://images.unsplash.com/photo-1536530719072-4cf7d4d7018e?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=82059643ae34f6a5cd23f601641a14cc&auto=format&fit=crop&w=667&q=80);
  background-size: cover;
  transform-origin: center center 0;
  transform: translateZ(-1px) scale(2);
  z-index: -1;
  min-height: 100vh;
`;

const Content = styled.div`
  font-family: serif;
  font-size: 45px;
  letter-spacing: 0.1em;
  margin: 0 auto;
  line-height: 100vh;
  color: white;
  @media (max-width: 500px) {
    font-size: 30px;
  }
  @media (max-width: 375px) {
    font-size: 20px;
  }
`;
export const Home = () => {
  return (
    <Wrapper>
      <Background />
      <Content>Hi, I'm Joanna. I do stuff.</Content>
    </Wrapper>
  );
};
