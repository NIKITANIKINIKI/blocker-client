import { UiLink } from "./ui-link";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiLink> = {
  title: "Компоненты/UiLink",
  component: UiLink,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiLink>;

export const Default: Story = {
  args: {
    children: "Click me",
    href:'/'
  },
};
