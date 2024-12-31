import { UiTextField } from "./ui-text-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiTextField> = {
  title: "Компоненты/UiTextField",
  component: UiTextField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiTextField>;

export const Default: Story = {
  args: {
    label: "Test Label",
    inputProps:{placeholder:'Test placeholder'}
  },
};

export const Error: Story = {
  args: {
    label: "Test Label",
    inputProps:{placeholder:'Test placeholder'},
    error: "Error",
  },
};
