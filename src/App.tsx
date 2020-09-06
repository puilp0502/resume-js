import React from "react";
import styled from "styled-components";

import { Profile, ProfileProps } from "./components/profile";
import {
  ExperienceSection,
  ExperienceSectionProps,
} from "./components/experience";
import { SkillSection, SkillSectionProps } from "./components/skill";

import "./App.css";

type SectionData =
  | {
      type: "profile";
      data: ProfileProps;
    }
  | {
      type: "experience";
      data: ExperienceSectionProps;
    }
  | {
      type: "skill";
      data: SkillSectionProps;
    };

function SectionRenderer({ data }: { data: SectionData }) {
  switch (data.type) {
    case "profile":
      return <Profile {...data.data} />;
    case "experience":
      return <ExperienceSection {...data.data} />;
    case "skill":
      return <SkillSection {...data.data} />;
  }
}

const Container = styled.div`
  @media screen and (max-width: 800px) {
    width: 96vw;
  }
  @media screen and (min-width: 1200px) {
    width: 960px;
  }
  @media screen and (min-width: 800px) and (max-width: 1200px) {
    width: 80vw;
  }
  margin: auto;
`;
/// Temporary data ingest method
import resumeData from "./resume.json";

function App() {
  const sections = resumeData.sections.map((v, idx) => (
    <SectionRenderer data={v as SectionData} key={idx} />
  ));
  return <Container>{sections}</Container>;
}

export default App;
