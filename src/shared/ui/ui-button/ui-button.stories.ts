import { UiButton } from "./ui-button";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiButton> = {
  title: "Компоненты/UiButton",
  component: UiButton,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiButton>;

export const Default: Story = {
  args: {
    children: "Click me",
    variant: "primary"
  },
};
