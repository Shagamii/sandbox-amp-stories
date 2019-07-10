import { BlogRankingService } from "../../services";
import { BlogRanking as template } from "../../views/pages";
import { buildPage } from "../build-views";

const service = new BlogRankingService({
  genre: "interior"
});

export async function renderPage() {
  const entries = await service.getEntries();
  if (entries === null) {
    throw new Error("entries is not null");
  }
  await buildPage(
    template({
      entries
    }),
    "interior-ranking"
  );
}
