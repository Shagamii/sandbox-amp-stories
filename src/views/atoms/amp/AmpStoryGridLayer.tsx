import React from "react";

type Props = {
  template: "fill" | "vertical" | "horizontal" | "thirds";
  children: React.ReactNode;
  className?: string;
};

export function AmpStoryGridLayer(
  props: Props & {
    [key: string]: any;
  }
) {
  const { children, className, template, ...rest } = props;
  return (
    <amp-story-grid-layer template={template} className={className} {...rest}>
      {children}
    </amp-story-grid-layer>
  );
}
