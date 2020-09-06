import React from "react";
import styled from "styled-components";

import theme from "../../theme";

export type ExperienceProps = {
  title: string;
  organization?: string;
  period?: string;
  website?: string;
  description: string;
  bullets?: string[];

  key?: number;
};

const ExperienceItem = styled.article`
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
`;

const Title = styled.h1`
  font-size: 1.8rem;
  font-weight: 500;
  margin-left: 0;
  color: #111111;
`;
const Organization = styled.h2`
  font-size: 1.4rem;
  color: ${theme.highlight};
  margin-left: 0;
`;
const Description = styled.div`
  font-size: 1rem;
`;
const BulletList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: inside;
`;
const Bullet = styled.li`
  margin: 0;
`;

const MetadataContainer = styled.div`
  display: flex;
`;
const MetadataElement = styled.div`
  margin-right: 10px;
  font-size: 0.8rem;
`;

function Metadata({ period, website }: { period: string; website: string }) {
  const websiteElement = website ? (
    <MetadataElement>
      <i className="fas fa-link" style={{ marginRight: "5px" }} />
      <a style={{ color: "black" }} href={website}>
        {website}
      </a>
    </MetadataElement>
  ) : null;
  const periodElement = period ? (
    <MetadataElement>
      <i className="fas fa-calendar-alt" style={{ marginRight: "5px" }} />
      <span>{period}</span>
    </MetadataElement>
  ) : null;
  return (
    <MetadataContainer>
      {periodElement}
      {websiteElement}
    </MetadataContainer>
  );
}

export function Experience(props: ExperienceProps) {
  const bullets = props.bullets?.map((v, idx) => (
    <Bullet key={idx}>{v}</Bullet>
  ));
  return (
    <ExperienceItem>
      <Title>{props.title}</Title>
      <Organization>{props.organization}</Organization>
      <Metadata period={props.period} website={props.website} />
      <Description>{props.description}</Description>
      <BulletList>{bullets}</BulletList>
    </ExperienceItem>
  );
}
