import React from "react";

import { Experience, ExperienceProps } from "./Experience";
import { Section } from "../Section";

export type ExperienceListProps = {
  name: string;
  entries: ExperienceProps[];
};

export function ExperienceList(props: ExperienceListProps) {
  const experiences = props.entries.map((v, idx) => (
    <>
      <Experience key={idx} {...v} />
      {idx < props.entries.length - 1 && (
        <hr style={{ border: "1px dashed #ccc" }} />
      )}
    </>
  ));
  return <Section title={props.name}>{experiences}</Section>;
}
