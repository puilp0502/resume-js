import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0 0 0;
`;
const SectionContainer = styled.section`
  padding: 48px 20px;
`;

export type SectionProps = {
  title: string;
};

export function Section({
  title,
  children,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <hr />
      {children}
    </SectionContainer>
  );
}
