import { UiLogo } from "./ui-logo";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiLogo> = {
  title: "Компоненты/UiLogo",
  component: UiLogo,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiLogo>;

export const Default: Story = {
  args: {
    logoContent:"Test content"
  },
};
