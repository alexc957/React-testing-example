import { generateFakeData } from "../data/fakeRepos";
import { getData } from "../data/getData";
import { IRepository } from "../IRepository";

import {
  filterByStars,
  getLatesUpdatedtRepos,
  sumOfStars,
} from "../repoOperations";

const mockRepos = () => generateFakeData();

jest.mock("../data/getData", () => ({
  getData: jest.fn(() => mockRepos()),
}));

let repos: any = [];
beforeAll(async () => {
  repos = await getData("");
});

describe("[Unit] repoOperations.test.ts", () => {
  describe(".filterByStars", () => {
    describe("when filtering the repositories without passing the numStars argument", () => {
      it("returns an array of 5 items", () => {
        const filteredRepos = filterByStars(repos);
        expect(filteredRepos.length).toBe(5);
      });
    });

    describe("when filtering the repositories that have more than 5 stars ", () => {
      it("returns an array of 5 items", () => {
        const filteredRepos = filterByStars(repos, 5);
        expect(filteredRepos.length).toBe(5);
      });
    });

    describe("when filtering the repositories that have a number of stars greater than a negative number", () => {
      it("returns the same repo array", () => {
        const filteredRepos = filterByStars(repos, -3);
        expect(filteredRepos).toEqual(repos);
      });
    });
  });

  describe(".getLatesUpdatedtRepos", () => {
    describe("when getting the 5 latest updated repositories. ", () => {
      it("returns an array of the latest updated repositories", () => {
        const latestRepos = getLatesUpdatedtRepos(repos);
        expect(latestRepos.length).toBe(5);
        expect(latestRepos[0]).toEqual(repos[repos.length - 1]);
      });
    });

    describe("when passing the number of repos to return is equal to the length of total of repositoires", () => {
      it("returns an array of the same length", () => {
        const latestRepos = getLatesUpdatedtRepos(repos, repos.length);
        expect(latestRepos.length).toBe(repos.length);
      });
    });
  });

  describe(".sumOfStars", () => {
    describe("when getting the sum of all the repositories stars ", () => {
      it("returns the value of 54", () => {
        const sum = sumOfStars(repos);
        expect(sum).toBe(54); // some number
      });
    });

    describe("when passing an empty array sum must be 0", () => {
      it("returns the value of 0", () => {
        const sum = sumOfStars([]);
        expect(sum).toBe(0);
      });
    });
  });
});
