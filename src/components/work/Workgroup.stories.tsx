import React from "react";
import { Story } from "@storybook/react/types-6-0";

import { Workgroup, WorkgroupProps } from "./Workgroup";
import { WorkProps } from "./Work";

export default {
  title: "Section/Work/Workgroup",
  component: Workgroup,
};

const Template: Story = (args: any) => <Workgroup {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "Mann Co.",
  position: "Professional Sniper",
  period: "08/1950 - 12/1956",
  website: "http://www.teamfortress.com/",
  works: [
    {
      title: "Sniping enemies",
      description:
        "Professionally eliminated enemy mercenaries with standards.",
      bullets: [
        "Killed enemy medic 11742 times",
        "Killed enemy scout 8324 times",
        "Killed disguised spy 52 times",
      ],
      footer: "Main weapon: Sniper Rifle",
    },
    {
      title: "Dealing with spies",
      description:
        "Dealt with spies that were trying to backstab our team members.",
      bullets: [
        "Deprived enemy spy's morale by up to 75%",
        "Blocked enemy spy's backstab attempt 1735 times",
      ],
      footer: "Main Weapon Set: Sydney sleeper, Jarate, Bushwacka",
    },
  ] as WorkProps[],
} as WorkgroupProps;
