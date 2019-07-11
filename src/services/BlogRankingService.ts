import fetch from "node-fetch";

class RankingService {}

type Genre = string;

type Params = {
  genre: Genre;
};

export type BlogRankingEntry = {
  blog: {
    nickname: string;
    profileImage: string;
    title: string;
  };
};

export class BlogRankingService extends RankingService {
  genre: Genre;
  entries: null | BlogRankingEntry[] = null;

  constructor(params: Params) {
    super();
    this.genre = params.genre;
  }

  private async fetch() {
    try {
      const res = await fetch(
        `https://blogger.ameba.jp/api/blogs/rankings?genreCode=${
          this.genre
        }&limit=10&includeAmebaBlog=true&includeAmebaBlogRecentEntries=true`
      );
      return res.json();
    } catch (e) {
      return new Error(e);
    }
  }

  async getEntries() {
    if (this.entries === null) {
      const rawEntries = await this.fetch();
      // @ts-ignore
      this.entries = rawEntries.data.map(data => ({
        blog: data.amebaBlog
      }));
    }
    return this.entries;
  }
}
