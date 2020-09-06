import React from "react";
import styled from "styled-components";

const Tag = styled.span`
  display: inline-block;
  padding: 5px 10px;
  margin-right: 10px;
  font-size: 1rem;
  font-weight: 700;
  border-bottom: 2px solid #ababab;
`;
const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export function TagList({ tags }: { tags: string[] }) {
  const tagList = tags.map((v, idx) => <Tag key={idx}>{v}</Tag>);
  return <TagContainer>{tagList}</TagContainer>;
}
