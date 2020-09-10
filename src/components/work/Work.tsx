import React from "react";
import styled from "styled-components";

export type WorkProps = {
  title: string;
  description: string;
  bullets?: string[];
  footer?: string;

  key?: number;
};

const WorkItem = styled.article`
  display: flex;
  flex-direction: column;
  margin: 0.6rem 0;
`;

const Title = styled.h1`
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0.3rem 0;
`;

const Description = styled.div`
  font-size: 1rem;
  word-break: keep-all;
  margin: 1rem 0;
`;
const BulletList = styled.ul`
  font-size: 1rem;
  margin: 0;
  padding: 0 0 0 1.5rem;
`;
const Bullet = styled.li`
  margin: 3px 0;
  line-height: 1.5;
  word-break: keep-all;
`;

export function Work(props: WorkProps) {
  const bullets = props.bullets?.map((v, idx) => (
    <Bullet key={idx}>{v}</Bullet>
  ));
  return (
    <WorkItem>
      <Title>{props.title}</Title>
      <Description>{props.description}</Description>
      <BulletList>{bullets}</BulletList>
      <Description>{props.footer}</Description>
    </WorkItem>
  );
}
