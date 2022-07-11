import { getData } from "../data/getData";

import {
  filterByStars,
  getLatesUpdatedtRepos,
  sumOfStars,
} from "../repoOperations";

let repos: any = [];
beforeAll(async () => {
  repos = await getData("https://api.github.com/orgs/stackbuilders/repos");
});

describe("[Unit] RepoOperations.test.ts", () => {
  describe("filterByStars", () => {
    describe("when filtering the repositories without passing the numStars", () => {
      it("returns an array with a length of 5", () => {
        const filteredRepos = filterByStars(repos);
        expect(filteredRepos.length).toBe(5);
      });
    });

    describe("when passing 6 as a the value of numStars ", () => {
      it("returns an array with a length of 4", () => {
        const filteredRepos = filterByStars(repos, 6);
        expect(filteredRepos.length).toBe(4);
      });
    });

    describe("when passing a negative number as the value of numStars", () => {
      it("returns the same repo array", () => {
        const filteredRepos = filterByStars(repos, -3);
        expect(filteredRepos).toEqual(repos);
      });
    });
  });

  describe(".getLatesUpdatedtRepos", () => {
    describe("when calling the function without passing the numRepos ", () => {
      it("returns an array of length 5", () => {
        const latestRepos = getLatesUpdatedtRepos(repos);
        expect(latestRepos.length).toBe(5);
        expect(latestRepos[0]).toEqual(repos[repos.length - 1]);
      });
    });

    describe("when numRepos is equal to the lenght of the repos array ", () => {
      it("returns an array of the same length", () => {
        const latestRepos = getLatesUpdatedtRepos(repos, repos.length);
        expect(latestRepos.length).toBe(repos.length);
      });
    });
  });

  describe(".sumOfStars", () => {
    describe("when passing the current array ", () => {
      it("returns the value of 54", () => {
        const sum = sumOfStars(repos);
        expect(sum).toBe(54); // some number
      });
    });

    describe("when passing an empty array", () => {
      it("returns the value of 0", () => {
        const sum = sumOfStars([]);
        expect(sum).toBe(0);
      });
    });
  });
});
