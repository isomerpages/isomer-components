// InfoCards.stories.tsx

import React from "react"
import { Story, Meta } from "@storybook/react"
import Hero, { HeroProps } from "./Hero"

export default {
  title: "Isomer/Hero",
  component: Hero,
  argTypes: {},
} as Meta

// Template for stories
const Template: Story<HeroProps> = (args) => <Hero {...args} />

// Default scenario
export const Default = Template.bind({})
Default.args = {}

// Custom scenario
export const CustomCard = Template.bind({})
CustomCard.args = {
  heroTitle: "Custom title",
  heroCaption: "Custom title with some text and other stuff",
  buttonLabel: "Custom button",
  logoUrl: "https://picsum.photos/200",
  nav: [
    { name: "Product", href: "#" },
    { name: "Features", href: "#" },
    { name: "About", href: "#" },
    { name: "Contact", href: "#" },
  ],
}