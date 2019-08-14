import React from "react";
import styled from "styled-components";
import * as Amp from "react-amphtml";

import { BlogRankingEntry } from "../../services/BlogRankingService";

type Props = {
  entries: BlogRankingEntry[];
};

export function BlogRanking(props: Props) {
  const { entries } = props;
  return (
    <Amp.AmpStory
      standalone
      specName="default"
      title="example"
      publisher="example"
      publisher-logo-src="http"
      poster-portrait-src="https"
    >
      {entries.map(({ blog }) => (
        <Amp.AmpStoryPage id={blog.nickname} key={blog.nickname}>
          <Amp.AmpStoryGridLayer template="fill">
            <Amp.AmpImg
              specName="default"
              src={blog.profileImage}
              layout="fill"
            />
          </Amp.AmpStoryGridLayer>
          <Amp.AmpStoryGridLayer template="vertical">
            <UserIcon
              src={blog.profileImage}
              width="100"
              height="100"
              layout="fixed"
              animate-in="fly-in-right"
              animate-in-duration="3s"
            />
            <Title animate-in="fly-in-right" animate-in-duration="3s">
              {blog.title}
            </Title>
          </Amp.AmpStoryGridLayer>
        </Amp.AmpStoryPage>
      ))}
    </Amp.AmpStory>
  );
}

const UserIcon = styled(Amp.AmpImg).attrs({
  specName: "default"
})`
  border-radius: 50%;
`;

const Title = styled(Amp.H1)`
  background-color: rgba(255, 255, 255, 0.8);
`;
