import React from "react";

type Props = {
  src: string;
  layout: string;
  className?: string;
};

export function AmpImg(
  props: Props & {
    [key: string]: any;
  }
) {
  const { src, layout, children, className, ...rest } = props;
  return <amp-img src={src} layout={layout} className={className} {...rest} />;
}
