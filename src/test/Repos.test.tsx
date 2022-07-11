import { render, screen } from "@testing-library/react";
import React from "react";
import Repos from "../components/Repos";
import { getData } from "../data/getData";
import { IRepository } from "../IRepository";
import { filterByStars, getLatesUpdatedtRepos } from "../repoOperations";

let repos: IRepository[] = [];
beforeAll(async () => {
  repos = await getData("/orgs/stackbuilders/repos");
});

describe("List of repositories", () => {
  describe("when the repos array has 9 items", () => {
    it("renders a list of 9 items", () => {
      render(
        <Repos repos={repos} title="Repositories with more than 5 stars " />
      );
      const listEl = screen.getAllByRole("listitem");

      expect(listEl.length).toBe(9);
    });
  });

  describe("when passing an array of 2 elements", () => {
    it("renders an array of 2 items ", () => {
      const myArray = repos.slice(0, 2);
      render(
        <Repos repos={myArray} title="Repositories with more than 5 stars " />
      );
      const listEl = screen.getAllByRole("listitem");

      expect(listEl.length).toBe(2);
    });
  });

  describe("when passing an empty list to the Repos component", () => {
    it("does not render a list of items ", () => {
      render(<Repos repos={[]} title="Empty list " />);
      const listEl = screen.queryAllByRole("listitem");

      expect(listEl).toHaveLength(0);
    });
  });
});
