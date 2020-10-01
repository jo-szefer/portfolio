import React from "react";
import styled from "styled-components";

import { Button } from "../common/Button";

const ProjectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;

const ProjectImage = styled.img`
  width: 40vw;
  height: auto;
  margin: 10px;
  filter: brightness(${(props) => props.brightness}%);
  @media (max-width: 400px) {
    width: 100%;
  }
`;
const ButtonsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
`;

const ProjectButton = styled(Button)`
  opacity: ${(props) => props.opacity};
  border-radius: 0;
  width: 15vw;
  @media (max-width: 400px) {
    width: 40%;
  }
`;

export const Project = (props) => {
  const [buttonOpacity, setButtonOpacity] = React.useState(0);
  const [imageBrightness, setImageBrightness] = React.useState(100);

  const handleMouseEnter = () => {
    setButtonOpacity(1);
    setImageBrightness(20);
  };
  const handleMouseLeave = () => {
    setButtonOpacity(0);
    setImageBrightness(100);
  };

  return (
    <ProjectWrapper
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <ProjectImage src={props.image} brightness={imageBrightness} />
      <ButtonsWrapper>
        <ProjectButton opacity={buttonOpacity}>Live</ProjectButton>
        <ProjectButton opacity={buttonOpacity}>Code</ProjectButton>
      </ButtonsWrapper>
    </ProjectWrapper>
  );
};
