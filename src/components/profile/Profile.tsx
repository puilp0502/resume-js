import React from "react";
import styled from "styled-components";

import { Contact, ContactProps } from "./Badge";

import theme from "../../theme";

const Name = styled.h1`
  font-family: liberation-sans, sans-serif;
  font-size: 3rem;
  text-align: left;
  margin-left: 0px;
`;
const Description = styled.h2`
  font-size: 1.6rem;
  color: ${theme.highlight};
  margin-left: 0px;
`;

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 20px;
`;
const ContactWrapper = styled.article`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 70%;
  margin-top: 5px;
`;

export type ProfileProps = {
  name: string;
  description?: string;
  badges: ContactProps[];
};

export function Profile(props: ProfileProps) {
  const badges = props.badges?.map((badge) => <Contact {...badge} />);
  return (
    <Wrapper>
      <Name>{props.name}</Name>
      <Description>{props.description || ""}</Description>
      <ContactWrapper>{badges}</ContactWrapper>
    </Wrapper>
  );
}
