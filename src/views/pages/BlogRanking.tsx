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
      <Amp.AmpStoryPage id="cover-image" auto-advance-after="2.5s">
        <Amp.AmpStoryGridLayer template="fill">
          <CoverContainer>
            <CoverIconContainer
              id="cover-icon"
              animate-in="drop"
              animate-in-duration="1s"
              animate-in-delay="0.5s"
            >
              <div
                animate-in="pulse"
                animate-in-duration="0.8s"
                animate-in-after="cover-icon"
                animate-in-delay="0.2s"
              >
                <AmebaIcon specName="default" width="200px" height="200px" />
              </div>
            </CoverIconContainer>
          </CoverContainer>
        </Amp.AmpStoryGridLayer>
        <Amp.AmpStoryPageAttachment layout="nodisplay">
          <h1>My title</h1>
          <p>
            Lots of interesting text with{" "}
            <a href="https://example.ampproject.org">links</a>!
          </p>
          <p>More text and a YouTube video!</p>
          <p>And a tweet!</p>
        </Amp.AmpStoryPageAttachment>
      </Amp.AmpStoryPage>
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

const CoverContainer = styled(Amp.Div).attrs({
  specName: "default"
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #2d8c3c;
`;

const CoverIconContainer = styled(Amp.Div).attrs({
  specName: "default"
})`
  border-radius: 50%;
  background-color: white;
  padding: 20px;
`;

const AmebaIcon = styled(Amp.AmpImg).attrs({
  layout: "fixed",
  src:
    "http://stat.ameba.jp/user_images/20150721/18/staff-amebame/14/a3/p/o0200020013372500852.png"
})`
  border-radius: 50%;
`;
