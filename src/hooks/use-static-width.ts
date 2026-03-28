"use client";

import * as React from "react";

export function useStaticWidth<T extends HTMLElement>() {
  const [staticWidth, setStaticWidth] = React.useState(0);
  const elementRef = React.useRef<T | null>(null);

  React.useEffect(() => {
    const element = elementRef.current;

    if (!element) {
      return;
    }

    const resizeObserver = new ResizeObserver((entries) => {
      const nextWidth = Math.round(entries[0]?.contentRect.width ?? 0);

      setStaticWidth((currentWidth) => {
        if (currentWidth === nextWidth) {
          return currentWidth;
        }

        return nextWidth;
      });
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  return {
    staticWidth,
    elementRef,
  };
}
