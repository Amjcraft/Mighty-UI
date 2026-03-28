import * as React from "react";

export type StaticWidthProps = {
  staticWidth?: number;
};

export function withStaticWidth(
  children: React.ReactNode,
  staticWidth: number,
): React.ReactNode {
  return React.Children.map(children, (child) => {
    if (!React.isValidElement(child)) {
      return child;
    }

    if (child.type === React.Fragment) {
      return (
        <React.Fragment key={child.key}>
          {withStaticWidth(
            (child as React.ReactElement<{ children: React.ReactNode }>).props
              .children,
            staticWidth,
          )}
        </React.Fragment>
      );
    }

    if (typeof child.type === "string") {
      return child;
    }

    return React.cloneElement(child as React.ReactElement<StaticWidthProps>, {
      staticWidth,
    });
  });
}
