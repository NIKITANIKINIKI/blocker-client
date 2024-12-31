import { UiSpinner } from "./ui-spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiSpinner> = {
  title: "Компоненты/UiSpinner",
  component: UiSpinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiSpinner>;

export const Default: Story = {
  args: {
  },
};
