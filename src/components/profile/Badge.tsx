import React from "react";
import styled from "styled-components";

import theme from "../../theme";

export type ContactProps = {
  icon?: string;
  iconClass?: string;
  value: string;
  href?: string;
};

const Wrapper = styled.div`
  display: flex;
`;
const IconWrapper = styled.div`
  display: inline;
  color: ${theme.highlight};
  margin-right: 5px;
`;

export function Contact(props: ContactProps) {
  let icon_class = null;
  if (!props.iconClass) {
    icon_class = "fas fa-" + props.icon;
  } else {
    icon_class = props.iconClass;
  }
  return (
    <Wrapper>
      <IconWrapper>{icon_class && <i className={icon_class} />}</IconWrapper>
      <a style={{ color: "black" }} href={props.href}>
        <div>{props.value}</div>
      </a>
    </Wrapper>
  );
}
