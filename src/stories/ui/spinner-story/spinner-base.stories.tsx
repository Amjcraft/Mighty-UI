import type { Meta, StoryObj } from "@storybook/react-vite";
import { ArrowUpIcon } from "lucide-react";

import { Badge } from "../../../components/badge";
import { Button } from "../../../components/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "../../../components/empty";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
  InputGroupTextarea,
} from "../../../components/input-group";
import {
  Item,
  ItemContent,
  ItemMedia,
  ItemTitle,
} from "../../../components/item";
import { Spinner } from "../../../components/spinner";

/**
 * An indicator that can be used to show a loading state.
 */
const meta: Meta<typeof Spinner> = {
  title: "ui/Spinner",
  component: Spinner,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
} satisfies Meta<typeof Spinner>;

export default meta;

type Story = StoryObj<typeof meta>;

export const WithItem: Story = {
  render: (args) => (
    <div className="flex w-full max-w-xs flex-col gap-4 [--radius:1rem]">
      <Item variant="muted">
        <ItemMedia>
          <Spinner {...args} />
        </ItemMedia>
        <ItemContent>
          <ItemTitle className="line-clamp-1">Processing payment...</ItemTitle>
        </ItemContent>
        <ItemContent className="flex-none justify-end">
          <span className="text-sm tabular-nums">$100.00</span>
        </ItemContent>
      </Item>
    </div>
  ),
};

export const WithButton: Story = {
  render: (args) => (
    <Button disabled size="sm">
      <Spinner {...args} />
      Loading...
    </Button>
  ),
};

export const WithBadge: Story = {
  render: (args) => (
    <Badge>
      <Spinner {...args} />
      Syncing
    </Badge>
  ),
};

export const WithInputGroup: Story = {
  render: (args) => (
    <div className="flex w-full max-w-md flex-col gap-4">
      <InputGroup>
        <InputGroupInput placeholder="Send a message..." disabled />
        <InputGroupAddon align="inline-end">
          <Spinner {...args} />
        </InputGroupAddon>
      </InputGroup>
      <InputGroup>
        <InputGroupTextarea placeholder="Send a message..." disabled />
        <InputGroupAddon align="block-end">
          <Spinner /> Validating...
          <InputGroupButton className="ml-auto" variant="default">
            <ArrowUpIcon />
            <span className="sr-only">Send</span>
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>
  ),
};

export const WithEmpty: Story = {
  render: (args) => (
    <Empty className="w-full">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Spinner {...args} />
        </EmptyMedia>
        <EmptyTitle>Processing your request</EmptyTitle>
        <EmptyDescription>
          Please wait while we process your request. Do not refresh the page.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline" size="sm">
          Cancel
        </Button>
      </EmptyContent>
    </Empty>
  ),
};
