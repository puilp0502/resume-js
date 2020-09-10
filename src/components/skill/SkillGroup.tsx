import React from "react";
import styled from "styled-components";

import { TagList } from "./TagList";

export type SkillGroupProps = {
  groupName: string;
  skills: string[];
};

const SkillGroupContainer = styled.article`
  margin: 0.6rem;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const GroupTitle = styled.h2`
  font-size: 1.4rem;
  flex: 0 0 18rem;
`;
const Group = styled.div``;

export function SkillGroup(props: SkillGroupProps) {
  const skillList = TagList({ tags: props.skills });
  return (
    <SkillGroupContainer>
      <GroupTitle>{props.groupName}</GroupTitle>
      <Group>{skillList}</Group>
    </SkillGroupContainer>
  );
}
