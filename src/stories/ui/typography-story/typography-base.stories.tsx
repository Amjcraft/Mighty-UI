import type { Meta, StoryObj } from "@storybook/react-vite";
import { Typography } from "../../../components/typography";

const meta = {
  title: "ui/Typography",
  component: Typography,
  tags: ["autodocs"],
  args: {
    children: "The quick brown fox jumps over the lazy dog.",
  },
} satisfies Meta<typeof Typography>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const H1: Story = {
  args: {
    variant: "h1",
    children: "Heading One",
  },
};

export const H2: Story = {
  args: {
    variant: "h2",
    children: "Heading Two",
  },
};

export const H3: Story = {
  args: {
    variant: "h3",
    children: "Heading Three",
  },
};

export const H4: Story = {
  args: {
    variant: "h4",
    children: "Heading Four",
  },
};

export const Lead: Story = {
  args: {
    variant: "lead",
    children: "A lead paragraph introduces a section with slightly larger, muted text.",
  },
};

export const Small: Story = {
  args: {
    variant: "small",
    children: "Small text for captions, footnotes, or secondary information.",
  },
};

export const Muted: Story = {
  args: {
    variant: "muted",
    children: "Muted text for de-emphasized or helper content.",
  },
};

export const Link: Story = {
  args: {
    variant: "link",
    children: "A link-styled typography element.",
  },
};

export const AllVariants: Story = {
  render: () => (
    <div className="space-y-6">
      <Typography variant="h1">Heading One</Typography>
      <Typography variant="h2">Heading Two</Typography>
      <Typography variant="h3">Heading Three</Typography>
      <Typography variant="h4">Heading Four</Typography>
      <Typography variant="lead">Lead paragraph text that introduces a section.</Typography>
      <Typography variant="default">Default paragraph text. The quick brown fox jumps over the lazy dog.</Typography>
      <Typography variant="small">Small text for captions and secondary information.</Typography>
      <Typography variant="muted">Muted text for de-emphasized content.</Typography>
      <Typography variant="link">Link-styled text element.</Typography>
    </div>
  ),
};