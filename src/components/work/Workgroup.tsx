import React from "react";
import styled from "styled-components";

import { Work, WorkProps } from "./Work";
import theme from "../../theme";

export type WorkgroupProps = {
  name: string;
  position?: string;
  period?: string;
  website?: string;
  works?: WorkProps[];
};

const MetadataContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const MetadataElement = styled.div`
  margin-right: 1rem;
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

const Container = styled.div`
  display: flex;
  flex-direction: row;
  margin: 1rem 0;
  @media print {
    break-inside: avoid;
  }
  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
const Header = styled.div`
  flex: 0 0 18rem;
  margin: 0.6rem;
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 800px) {
    flex: auto;
    margin: 0.6rem 0;
  }
`;
const Organization = styled.h2`
  font-size: 1.4rem;
  margin: 0 0 0.3rem 0;
  color: ${theme.highlight};
`;
const Title = styled.h1`
  font-size: 1rem;
  font-weight: 500;
  margin: 0.3rem 0;
`;
const Divider = styled.hr`
  border: 1px dashed #ccc;
  margin-bottom: 1rem;
`;
const WorkContainer = styled.div``;

export function Workgroup(props: WorkgroupProps) {
  const works = props.works?.map((v, idx) => (
    <>
      <Work key={idx} {...v} />
      {idx < props.works.length - 1 && <Divider />}
    </>
  ));
  return (
    <Container>
      <Header>
        <Organization>{props.name}</Organization>
        <Title>{props.position}</Title>
        <Metadata period={props.period} website={props.website} />
      </Header>
      <WorkContainer>{works}</WorkContainer>
    </Container>
  );
}
