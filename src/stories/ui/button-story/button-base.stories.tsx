import type { Meta, StoryObj } from "@storybook/react-vite";
import { Loader2, Mail } from "lucide-react";

import { Button } from "../../../components/button";

/**
 * Displays a button or a component that looks like a button.
 */
const meta: Meta<typeof Button> = {
  title: "ui/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: [
        "default",
        "destructive",
        "outline",
        "secondary",
        "ghost",
        "link",
      ],
    },
    size: {
      control: "select",
      options: [
        "default",
        "xs",
        "sm",
        "lg",
        "icon",
        "icon-xs",
        "icon-sm",
        "icon-lg",
      ],
      if: { arg: "variant", neq: "link" },
    },
    children: {
      control: "text",
    },
    disabled: {
      control: "boolean",
    },
  },
  parameters: {
    layout: "centered",
  },
  args: {
    variant: "default",
    size: "default",
    children: "Button",
    disabled: false,
  },
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * The default form of the button, used for primary actions and commands.
 */
export const Default: Story = {};

/**
 * Use the `outline` button to reduce emphasis on secondary actions.
 */
export const Outline: Story = {
  args: { variant: "outline" },
};

/**
 * Use the `ghost` button for less intrusive actions.
 */
export const Ghost: Story = {
  args: { variant: "ghost" },
};

/**
 * Use the `secondary` button for less emphasized actions.
 */
export const Secondary: Story = {
  args: { variant: "secondary" },
};

/**
 * Use the `destructive` button to indicate errors or immediate attention.
 */
export const Destructive: Story = {
  args: { variant: "destructive" },
};

/**
 * Use the `link` button for hyperlink or navigation actions.
 */
export const Link: Story = {
  args: { variant: "link" },
};

/**
 * Add a loading indicator to signify an in-progress action.
 */
export const Loading: Story = {
  render: (args) => (
    <Button {...args}>
      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
      Button
    </Button>
  ),
  args: {
    ...Outline.args,
    disabled: true,
  },
};

/**
 * Add an icon to enhance visual communication.
 */
export const WithIcon: Story = {
  render: (args) => (
    <Button {...args}>
      <Mail className="mr-2 h-4 w-4" /> Login with Email Button
    </Button>
  ),
  args: { ...Secondary.args },
};

export const Small: Story = {
  args: { size: "sm" },
};

export const Large: Story = {
  args: { size: "lg" },
};

export const Icon: Story = {
  args: {
    ...Secondary.args,
    size: "icon",
    title: "Mail",
    children: <Mail />,
  },
};

export const IconSmall: Story = {
  args: {
    variant: "secondary",
    size: "icon-sm",
    title: "Mail",
    children: <Mail />,
  },
};

export const IconLarge: Story = {
  args: {
    variant: "secondary",
    size: "icon-lg",
    title: "Mail",
    children: <Mail />,
  },
};

export const Disabled: Story = {
  args: { disabled: true },
};
