import React from "react";
import styled from "styled-components";

import { Title } from "../common/Title";
import { Project } from "./Project";
import projects from "./projects";

const ProjectsWrapper = styled.div`
  background: 
  height: 100vh;
`;
const ProjectsSection = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Projects = () => {
  return (
    <ProjectsWrapper id="projects">
      <Title>projects</Title>
      <ProjectsSection>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </ProjectsSection>
    </ProjectsWrapper>
  );
};
