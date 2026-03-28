"use client";

import * as React from "react";

import { useStaticWidth } from "@workspace/ui/hooks/use-static-width";
import { withStaticWidth } from "@workspace/ui/lib/with-static-width";
import { cn } from "@workspace/ui/lib/utils";

type CardContentRenderProps = {
  staticWidth: number;
};

type CardContentWithStaticWidthProps = Omit<
  React.ComponentProps<"div">,
  "children"
> & {
  children?:
    | React.ReactNode
    | ((props: CardContentRenderProps) => React.ReactNode);
  onStaticWidthChange?: (width: number) => void;
};

function CardContentWithStaticWidth({
  className,
  children,
  onStaticWidthChange,
  style,
  ...props
}: CardContentWithStaticWidthProps) {
  const { staticWidth, elementRef } = useStaticWidth<HTMLDivElement>();

  React.useEffect(() => {
    onStaticWidthChange?.(staticWidth);
  }, [onStaticWidthChange, staticWidth]);

  const content = React.useMemo(() => {
    if (typeof children === "function") {
      return children({ staticWidth });
    }

    return withStaticWidth(children, staticWidth);
  }, [children, staticWidth]);

  return (
    <div
      ref={elementRef}
      data-slot='card-content static-width'
      className={cn("px-6", className)}
      style={
        {
          ...style,
          "--card-content-width": `${staticWidth}px`,
        } as React.CSSProperties
      }
      {...props}
    >
      {content}
    </div>
  );
}

export { CardContentWithStaticWidth };
export type { CardContentWithStaticWidthProps, CardContentRenderProps };
