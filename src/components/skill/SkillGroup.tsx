import React from "react";
import styled from "styled-components";

import { TagList } from "./TagList";

export type SkillGroupProps = {
  groupName: string;
  skills: string[];
};

const SkillGroupContainer = styled.article`
  margin: 15px 0;
`;
const GroupTitle = styled.h2`
  font-size: 1.4rem;
`;

export function SkillGroup(props: SkillGroupProps) {
  const skillList = TagList({ tags: props.skills });
  return (
    <SkillGroupContainer>
      <GroupTitle>{props.groupName}</GroupTitle>
      {skillList}
    </SkillGroupContainer>
  );
}
