import { cva, type VariantProps } from "class-variance-authority";
import type { ReactNode } from "react";

import { cn } from "../lib/utils";

type TypographyProps = {
  className?: string;
  children?: ReactNode;
} & VariantProps<typeof typographyVariants>;

const typographyVariants = cva("leading-7 [&:not(:first-child)]:mt-6", {
  variants: {
    variant: {
      default: "leading-7 [&:not(:first-child)]:mt-6",
      h1: "scroll-m-20 text-4xl font-extrabold tracking-tight text-balance",
      h2: "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight first:mt-0",
      h3: "scroll-m-20 text-2xl font-semibold tracking-tight",
      h4: "scroll-m-20 text-xl font-semibold tracking-tight",
      lead: "text-xl text-muted-foreground",
      small: "text-sm leading-6",
      muted: "text-sm text-muted-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

function Typography({
  className,
  variant,
  ...props
}: TypographyProps &
  VariantProps<typeof typographyVariants> & {
    asChild?: boolean;
  }) {
  const getComponent = () => {
    switch (variant) {
      case "h1":
      case "h2":
      case "h3":
      case "h4":
        return variant;
      default:
        return "p";
    }
  };

  const Comp = getComponent() as "p" | "h1" | "h2" | "h3" | "h4" | "p";

  return (
    <Comp
      className={cn(typographyVariants({ variant, className }))}
      {...props}
    />
  );
}

export { Typography, typographyVariants };
