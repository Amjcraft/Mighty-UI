import type { Meta, StoryObj } from "@storybook/react-vite";

import { Button } from "../../../components/button";
import { Label } from "../../../components/label";
import { Textarea } from "../../../components/textarea";

/**
 * Displays a form textarea or a component that looks like a textarea.
 */
const meta = {
  title: "ui/Textarea",
  component: Textarea,
  tags: ["autodocs"],
  argTypes: {},
  args: {
    placeholder: "Type your message here.",
    disabled: false,
  },
} satisfies Meta<typeof Textarea>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};

export const WithLabel: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">Your message</Label>
      <Textarea {...args} id="message" />
    </div>
  ),
};

export const WithText: Story = {
  render: (args) => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message-2">Your Message</Label>
      <Textarea {...args} id="message-2" />
      <p className="text-slate-500 text-sm">
        Your message will be copied to the support team.
      </p>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <div className="grid w-full gap-2">
      <Textarea {...args} />
      <Button type="submit">Send Message</Button>
    </div>
  ),
};
