import React from "react";

import { SkillGroup, SkillGroupProps } from "./SkillGroup";
import { Section } from "../Section";

export type SkillSectionProps = {
  name: string;
  groups: SkillGroupProps[];
};

export function SkillSection(props: SkillSectionProps) {
  const skillGroups = props.groups.map((v, idx) => (
    <SkillGroup key={idx} {...v} />
  ));
  return (
    <Section title={props.name} unbreakable={true}>
      {skillGroups}
    </Section>
  );
}
