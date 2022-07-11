import { rest } from "msw";
import { generateFakeData } from "../data/fakeRepos";

export const handlers = [
  rest.get(
    "https://api.github.com/orgs/stackbuilders/repos",
    (req, res, ctx) => {
      const repos = generateFakeData();
      return res(ctx.status(200), ctx.json(repos));
    }
  ),
];
