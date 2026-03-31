import type { Meta, StoryObj } from "@storybook/react-vite";
import { Bold, Italic, Underline } from "lucide-react";

import {
  ToggleGroup,
  ToggleGroupItem,
} from "../../../components/toggle-group";

/**
 * A set of two-state buttons that can be toggled on or off.
 */
const meta = {
  title: "ui/ToggleGroup",
  component: ToggleGroup,
  tags: ["autodocs"],
  argTypes: {
    multiple: {
      options: [true, false],
      control: { type: "radio" },
    },
  },
  args: {
    variant: "default",
    size: "default",
    multiple: true,
    disabled: false,
  },
  render: (args) => (
    <ToggleGroup {...args}>
      <ToggleGroupItem value="bold" aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="italic" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="underline" aria-label="Toggle underline">
        <Underline className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  ),
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof ToggleGroup>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Outline: Story = {
  args: { variant: "outline" },
};

export const Single: Story = {
  args: { multiple: false },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Disabled: Story = {
  args: { disabled: true },
};
