import type { Meta, StoryObj } from "@storybook/react-vite";
import { Combobox } from "../../../components/combobox";

const meta = {
  title: "ui/Combobox",
  component: Combobox,
  tags: ["autodocs"],
} satisfies Meta<typeof Combobox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
