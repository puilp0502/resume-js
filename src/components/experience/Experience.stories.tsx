import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Experience, ExperienceProps } from "./Experience";

export default {
  title: "Section/Experience/Experience",
  component: Experience,
};

const Template: Story = (args: any) => <Experience {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Professional Rocket Jumper",
  organization: "Mann co.",
  period: "12/1954 - 08/1956",
  website: "http://www.teamfortress.com/",
  description: "Diving into enemy territory by rocket jumping",
  bullets: [
    "Killed enemy medic 11742 times",
    "Killed enemy scout 8324 times",
    "Killed backstabbing spy 523 times",
  ],
};
