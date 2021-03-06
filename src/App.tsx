import React from "react";
import styled from "styled-components";

import { Profile, ProfileProps } from "./components/profile";
import {
  ExperienceSection,
  ExperienceSectionProps,
} from "./components/experience";
import { WorkgroupSection, WorkgroupSectionProps } from "./components/work";
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
      type: "work";
      data: WorkgroupSectionProps;
    }
  | {
      type: "skill";
      data: SkillSectionProps;
    };

export type ResumeData = {
  sections: SectionData[];
};

function SectionRenderer({ data }: { data: SectionData }) {
  switch (data.type) {
    case "profile":
      return <Profile {...data.data} />;
    case "work":
      return <WorkgroupSection {...data.data} />;
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

function App(props: { resumeData: ResumeData }) {
  const sections = props.resumeData.sections.map((v, idx) => (
    <SectionRenderer data={v as SectionData} key={idx} />
  ));
  return <Container>{sections}</Container>;
}

export default App;
