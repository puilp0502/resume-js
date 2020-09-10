import React from "react";
import { Workgroup, WorkgroupProps } from "./Workgroup";
import { Section } from "../Section";

export type WorkgroupSectionProps = {
  name: string;
  entries: WorkgroupProps[];
};

export function WorkgroupSection(props: WorkgroupSectionProps) {
  const workgroups = props.entries?.map((v, idx) => (
    <>
      <Workgroup key={idx} {...v} />
      {idx < props.entries.length - 1 && (
        <hr style={{ border: "1px solid #ccc" }} />
      )}
    </>
  ));
  return <Section title={props.name}>{workgroups}</Section>;
}
