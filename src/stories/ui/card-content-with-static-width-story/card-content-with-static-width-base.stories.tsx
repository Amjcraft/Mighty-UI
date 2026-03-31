import type { Meta, StoryObj } from "@storybook/react-vite";
import { CardContentWithStaticWidth } from "../../../components/card-content-with-static-width";

const meta = {
  title: "ui/CardContentWithStaticWidth",
  component: CardContentWithStaticWidth,
  tags: ["autodocs"],
} satisfies Meta<typeof CardContentWithStaticWidth>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
