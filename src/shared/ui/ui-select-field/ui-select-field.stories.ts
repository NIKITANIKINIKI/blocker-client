import { UiSelectField } from "./ui-select-field";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiSelectField> = {
  title: "Компоненты/UiSelectField",
  component: UiSelectField,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiSelectField>;

export const Default: Story = {
  args: {
    label: "Test Label",
    options: [
      { label: "Test 1", value: "1" },
      { label: "Test 2", value: "2" },
      { label: "Test 3", value: "3" },
    ],
  },
};

export const Error: Story = {
  args: {
    label: "Test Label",
    error: "Error",
    options: [
      { label: "Test 1", value: "1" },
      { label: "Test 2", value: "2" },
      { label: "Test 3", value: "3" },
    ],
  },
};
