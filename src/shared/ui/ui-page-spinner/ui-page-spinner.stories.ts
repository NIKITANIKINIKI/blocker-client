import { UiPageSpinner } from "./ui-page-spinner";
import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof UiPageSpinner> = {
  title: "Компоненты/UiPageSpinner",
  component: UiPageSpinner,
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof UiPageSpinner>;

export const Default: Story = {
  args: {
  },
};
