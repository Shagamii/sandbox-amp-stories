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
            {/* <AmpImg src={blog.profileImage} layout="fill" /> */}
            <UserIcon src={blog.profileImage} />
          </AmpStoryGridLayer>
        </AmpStoryPage>
      ))}
    </AmpStory>
  );
}

const UserIcon = styled(AmpImg)`
  width: 100px;
  height: 100px;
  border-radius: 50%;
`;
