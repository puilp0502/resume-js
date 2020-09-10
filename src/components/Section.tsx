import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0 0 0;
`;
const SectionContainer = styled.section`
  padding: 2rem 20px 0;
`;

export type SectionProps = {
  title: string;
};

const Divider = styled.hr`
  border: 1px solid #ccc;
`;
export function Section({
  title,
  children,
}: React.PropsWithChildren<SectionProps>) {
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      <Divider />
      {children}
    </SectionContainer>
  );
}
