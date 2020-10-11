import React from "react";
import styled from "styled-components";

import { Project } from "./Project";
import { Section } from "../common/Section";

import projects from "./projects";

const ProjectsWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  position: relative;
  @media (max-width: 400px) {
    flex-direction: column;
  }
`;

export const Projects = () => {
  return (
    <Section id="projects" isLight={true} title="projects">
      <ProjectsWrapper>
        {projects.map((project) => (
          <Project {...project} />
        ))}
      </ProjectsWrapper>
    </Section>
  );
};
