class RankingService { }

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
    return Promise.resolve({
      data: [{
        nickname: 'shagamii',
        profileImage: 'https://shagamii.tech/static/portrait-b8a95406c40399ec413dffdc92d627af.png',
        title: 'This is my profile!'
      },
      {
        nickname: 'taro',
        profileImage: 'https://4.bp.blogspot.com/-07kP2lUa7Fg/XLAdf6K1E9I/AAAAAAABSY8/E9DvKUWrdnc51az3JqtT6PNoFS8xm3qAQCLcBGAs/s180-c/sweets_peropero_candy_boy.png',
        title: "This is taro's profile!"
      }]
    })
  }

  async getEntries() {
    if (this.entries === null) {
      const rawEntries = await this.fetch();
      this.entries = rawEntries.data.map(data => ({
        blog: data
      }));
    }
    return this.entries;
  }
}
