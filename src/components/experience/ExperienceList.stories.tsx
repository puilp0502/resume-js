import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { ExperienceList, ExperienceListProps } from "./ExperienceList";
import { ExperienceProps } from "./Experience";

export default {
  title: "Section/Experience/ExperienceList",
  component: ExperienceList,
};

const Template: Story = (args: any) => <ExperienceList {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "EXPERIENCE",
  entries: [
    {
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
    },
    {
      title: "Professional Rocketeer",
      organization: "Mann co.",
      period: "12/1950 - 12/1954",
      description: "Shooting rockets at enemy",
      bullets: [
        "Blew up demoman 4242 times",
        "Blew up demoman 4243 times",
        "Blew up demoman 4244 times",
      ],
    },
  ] as ExperienceProps[],
} as ExperienceListProps;
