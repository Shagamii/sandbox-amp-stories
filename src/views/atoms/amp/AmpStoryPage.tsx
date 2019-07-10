import React from "react";

type Props = {
  id: string;
  className?: string;
  children: React.ReactNode;
};

export function AmpStoryPage(
  props: Props & {
    [key: string]: any;
  }
) {
  const { className, children, id, ...rest } = props;
  return (
    <amp-story-page id={id} class={className} {...rest}>
      {children}
    </amp-story-page>
  );
}
