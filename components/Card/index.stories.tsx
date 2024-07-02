import type { Meta, StoryObj } from "@storybook/react";
import Card from "./index";

type CardPropsAndCustomArgs = React.ComponentProps<typeof Card>;
type Story = StoryObj<CardPropsAndCustomArgs>;

const meta: Meta<typeof Card> = {
  component: Card,
};
export default meta;

export const GreenCard: Story = {
  args: {
    background: "#00AA00",
    title: "Hello World",
    showSub: false,
    children:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla, soluta?",
  },
};
