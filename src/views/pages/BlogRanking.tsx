import React from "react";
import styled from "styled-components";

import { BlogRankingEntry } from "../../services/BlogRankingService";
import {
  AmpStory,
  AmpStoryPage,
  AmpStoryGridLayer,
  AmpImg
} from "../atoms/amp";

type Props = {
  entries: BlogRankingEntry[];
};

export function BlogRanking(props: Props) {
  const { entries } = props;
  return (
    <AmpStory
      title="example"
      publisher="example"
      publisherLogoSrc="http"
      posterPortraitSrc="https"
    >
      {entries.map(({ blog }) => (
        <AmpStoryPage id={blog.nickname} key={blog.nickname}>
          <AmpStoryGridLayer template="fill">
            <AmpImg src={blog.profileImage} layout="fill" />
          </AmpStoryGridLayer>
          <AmpStoryGridLayer template="vertical">
            <UserIcon
              src={blog.profileImage}
              width="100"
              height="100"
              layout="fixed"
            />
            <Title>{blog.title}</Title>
          </AmpStoryGridLayer>
        </AmpStoryPage>
      ))}
    </AmpStory>
  );
}

const UserIcon = styled(AmpImg)`
  border-radius: 50%;
`;

const Title = styled.h1`
  background: rgba(0, 0, 0, 0.8);
  color: white;
`;
