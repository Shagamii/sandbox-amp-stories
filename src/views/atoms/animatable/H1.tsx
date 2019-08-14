import React from "react";

type Props = {
  animateIn: string;
  className?: string;
} & React.HTMLAttributes<HTMLHeadingElement>;

export function H1(props: Props) {
  const { animateIn, className, ...attributes } = props;
  return <h1 className={className} animate-in={animateIn} {...attributes} />;
}
