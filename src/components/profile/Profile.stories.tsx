import React from "react";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story } from "@storybook/react/types-6-0";

import { Profile, ProfileProps } from "./Profile";

export default {
  title: "Profile",
  component: Profile,
};

const Template: Story<ProfileProps> = (args) => <Profile {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "John Doe",
  description: "Professional Rocketeer",
  badges: [
    { icon: "phone", value: "+1 10 1234 5678" },
    { icon: "link", value: "http://example.com", href: "http://example.com" },
    {
      icon: "at",
      value: "john.doe@example.com",
      href: "mailto:john.doe@example.com",
    },
    { icon: "map-marker-alt", value: "Midwest, USA" },
  ],
} as ProfileProps;
