import React from "react";
import styled from "styled-components";

import { Background } from "./Background";
import { Navigation } from "./Navigation";

const Wrapper = styled.section`
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const Content = styled.div`
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

// const Neon = styled.span`
//   color: #fff;
//   text-align: center;
//   animation: glow 1s ease-in-out infinite alternate;
//   // font-family: "Neon 80s";
//   font-family: "BenguiatITCW01-BoldCn";

//   @keyframes glow {
//     from {
//       text-shadow: 0 0 10px #ff0000, 0 0 20px #ff0000, 0 0 30px #0033ff,
//         0 0 40px #0062ff, 0 0 50px #0072ff, 0 0 60px #00a2ff, 0 0 70px #00dfff;
//     }
//     to {
//       text-shadow: 0 0 20px #ff0000, 0 0 30px #ff0000, 0 0 40px #fe1000,
//         0 0 50px #fa1c03, 0 0 60px #ff3300, 0 0 70px #ff5306, 0 0 80px #ff6600;
//     }
//   }
// `;

export const Home = () => {
  return (
    <Wrapper>
      <Background />
      <Navigation />
      <Content>Hi, I'm Joanna. I do stuff.</Content>
    </Wrapper>
  );
};
