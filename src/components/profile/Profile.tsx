import React from "react";
import styled from "styled-components";

import { Contact, ContactProps } from "./Badge";

import theme from "../../theme";

const Name = styled.h1`
  font-family: liberation-sans, sans-serif;
  font-size: 3rem;
  text-align: left;
  margin: 0.3rem 0;
`;
const Description = styled.h2`
  font-size: 1.6rem;
  color: ${theme.highlight};
  margin: 0 0 0.25rem 0;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 3rem 20px 0;
  @media print {
    padding: 20px 20px 0;
  }
`;
const ContactWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin-top: 0.3rem;
  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;

export type ProfileProps = {
  name: string;
  description?: string;
  badges?: ContactProps[];
};

export function Profile(props: ProfileProps) {
  const badges = props.badges?.map((badge, idx) => (
    <Contact key={idx} {...badge} />
  ));
  return (
    <Wrapper>
      <Name>{props.name}</Name>
      <Description>{props.description || ""}</Description>
      <ContactWrapper>{badges}</ContactWrapper>
    </Wrapper>
  );
}
