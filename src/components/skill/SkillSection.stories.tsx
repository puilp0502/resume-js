import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { SkillSection, SkillSectionProps } from "./SkillSection";

export default {
  title: "Section/Skill/SkillSection",
  component: SkillSection,
};

const Template: Story = (args: any) => <SkillSection {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "SKILLSET",
  groups: [
    { groupName: "Language", skills: ["C", "Java", "Python"] },
    { groupName: "Framework", skills: ["Django", "Flask"] },
  ],
} as SkillSectionProps;
