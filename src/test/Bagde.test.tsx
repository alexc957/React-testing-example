import React from "react";
import { render, screen } from "@testing-library/react";

import { generateFakeData } from "../data/fakeRepos";
import { getData } from "../data/getData";
import {
  filterByStars,
  getLatesUpdatedtRepos,
  sumOfStars,
} from "../repoOperations";
import { IRepository } from "../IRepository";
import Badge from "../components/Badge";
import Repos from "../components/Repos";

const mockRepos = () => generateFakeData();

jest.mock("../data/getData", () => ({
  getData: jest.fn(() => mockRepos()),
}));

let repos: IRepository[] = [];
beforeAll(async () => {
  repos = await getData("");
});

describe("Sum of stars badge", () => {
  describe("when passing a value greater than zero", () => {
    it("renders the sum of the stars of all repositories", () => {
      render(<Badge value={54} />);

      const sumEl = screen.getByText("54");

      expect(sumEl).toBeInTheDocument();
    });
  });

  describe("when passing a harcoded value", () => {
    it("renders a harcoded value", () => {
      const harcodedValue = 3333;
      render(<Badge value={harcodedValue} />);
      expect(screen.getByText(`${harcodedValue}`)).toBeInTheDocument();
    });
  });

  describe("when passing a value of zero", () => {
    it("renders a value of 0 when computing the sum of stars of a empty array", () => {
      render(<Badge value={0} />);

      const sumEl = screen.getByText("0");

      expect(sumEl).toBeInTheDocument();
    });
  });
});
