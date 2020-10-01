import React from "react";
import styled from "styled-components";

import { Background } from "./Background";

const WrapperHome = styled.section`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 90vh;
  z-index: -1;
`;

const HomeTitle = styled.div`
  display: flex;
  justify-content: center;
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
    <WrapperHome id="home">
      <Background />
      <HomeTitle>Hi, I'm Joanna. I do stuff.</HomeTitle>
    </WrapperHome>
  );
};
