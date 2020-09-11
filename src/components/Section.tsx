import React from "react";
import styled from "styled-components";

const SectionTitle = styled.h1`
  font-size: 2.2rem;
  margin: 10px 0 0 0;
`;
type SectionContainerProps = {
  unbreakable?: boolean;
};
const SectionContainer = styled.section<SectionContainerProps>`
  padding: 2rem 20px 0;
  ${(props) =>
    props.unbreakable ? "@media print {page-break-inside: avoid;}" : ""}
`;

export type SectionProps = {
  title: string;
  unbreakable?: boolean;
};

const Divider = styled.hr`
  border: 1px solid #ccc;
`;
export function Section({
  title,
  children,
  unbreakable,
}: React.PropsWithChildren<SectionProps>) {
  console.log(title, unbreakable);
  return (
    <SectionContainer unbreakable={unbreakable}>
      <SectionTitle>{title}</SectionTitle>
      <Divider />
      {children}
    </SectionContainer>
  );
}
