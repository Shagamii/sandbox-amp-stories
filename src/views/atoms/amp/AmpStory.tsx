import React from "react";

type Props = {
  title: string;
  publisher: string;
  publisherLogoSrc: string;
  posterPortraitSrc: string;
  className?: string;
};

export function AmpStory(
  props: Props & {
    [key: string]: any;
  }
) {
  const {
    className,
    children,
    title,
    publisher,
    publisherLogoSrc,
    posterPortraitSrc,
    ...rest
  } = props;
  return (
    <amp-story
      standalone=""
      className={className}
      title={title}
      publisher={publisher}
      publisher-logo-src={publisherLogoSrc}
      poster-portrait-src={posterPortraitSrc}
      {...rest}
    >
      {children}
    </amp-story>
  );
}
