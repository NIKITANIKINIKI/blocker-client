import { UiHeader } from "./ui-header";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiHeader> = {
  title: "Компоненты/UiHeader",
  component: UiHeader,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiHeader>;

export const Default: Story = {
  args: {
    rightContent:'Правая часть'
  },
};
