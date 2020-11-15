import React from "react";
import styled from "styled-components";

const SvgContainer = styled.svg`
  position: absolute;
  bottom: 0;
`;

export const WaveDivider = () => {
  const svg = (
    <SvgContainer
      id="divider"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
    >
      <path
        fill="#f5f1ed"
        fill-opacity="1"
        d="M0,224L40,229.3C80,235,160,245,240,224C320,203,400,149,480,149.3C560,149,640,203,720,213.3C800,224,880,192,960,181.3C1040,171,1120,181,1200,197.3C1280,213,1360,235,1400,245.3L1440,256L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"
      ></path>
    </SvgContainer>
  );

  return svg;
};
