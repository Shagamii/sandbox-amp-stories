import React from "react";

type Props = {
  src: string;
  layout: string;
  className?: string;
  width?: string;
  height?: string;
};

export function AmpImg(
  props: Props & {
    [key: string]: any;
  }
) {
  const { src, layout, children, className, width, height, ...rest } = props;
  return (
    <amp-img
      src={src}
      layout={layout}
      class={className}
      width={width}
      height={height}
      {...rest}
    />
  );
}
