import React from 'react';
import styled from 'styled-components';

import theme from '../../theme';

export type ContactProps = {
    icon?: string,
    value: string,
    href?: string,
}

const Wrapper = styled.div`
    display: flex;
`;
const IconWrapper = styled.div`
    display: inline;
    color: ${theme.highlight};
    margin-right: 5px;
`;

export function Contact(props: ContactProps) {
    const icon_class = "fas fa-" + props.icon;
    return (
        <Wrapper>
            <IconWrapper>
                {props.icon && 
                <i className={icon_class}/>}
            </IconWrapper>
            <a style={{color: "black"}} href={props.href}>
                <div>{props.value}</div>
            </a>
        </Wrapper>
    )
}
