import React from "react";
import styled from "styled-components";

import { Experience, ExperienceProps } from "./Experience";

export type ExperienceListProps = {
  name: string;
  entries: ExperienceProps[];
};
const SectionTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0 0 0;
`;
const ExperienceContainer = styled.section`
  padding: 48px 20px;
`;
export function ExperienceList(props: ExperienceListProps) {
  const experiences = props.entries.map((v, idx) => (
    <>
      <Experience key={idx} {...v} />
      {idx < props.entries.length - 1 && (
        <hr style={{ border: "1px dashed #ccc" }} />
      )}
    </>
  ));
  return (
    <ExperienceContainer>
      <SectionTitle>{props.name}</SectionTitle>
      <hr />
      {experiences}
    </ExperienceContainer>
  );
}
