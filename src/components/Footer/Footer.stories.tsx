// InfoCards.stories.tsx

import { StoryFn, Meta } from "@storybook/react"
import Footer, { FooterProps } from "./Footer"

export default {
  title: "Isomer/Footer",
  component: Footer,
  argTypes: {},
} as Meta

// Template for stories
const Template: StoryFn<FooterProps> = (args) => <Footer {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {
  agencyName: "Isomer Next",
  lastUpdated: new Date(),
  items: [
    {
      title: "Column 1",
      subitems: [
        {
          title: "link",
          link: "",
        },
        {
          title: "long long long long long link",
          link: "",
        },
        {
          title: "link",
          link: "",
        },
      ],
      link: "www.google.com",
    },
    {
      title: "Column 2",
      subitems: [
        {
          title: "link",
          link: "",
        },
        {
          title: "long long long long long link",
          link: "",
        },
        {
          title: "link",
          link: "",
        },
      ],
    },
    {
      title: "Column 3",
      subitems: [
        {
          title: "link",
          link: "",
        },
        {
          title: "long long long long long link",
          link: "",
        },
        {
          title: "link",
          link: "",
        },
      ],
    },
  ],
}
