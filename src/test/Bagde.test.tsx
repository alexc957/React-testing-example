import React from "react";
import { render, screen } from "@testing-library/react";

import Badge from "../components/Badge";

describe("Sum of stars badge", () => {
  describe("when passing a value greater than zero", () => {
    it("renders the value as a text", () => {
      render(<Badge value={54} />);

      const sumEl = screen.getByText("54");

      expect(sumEl).toBeInTheDocument();
    });
  });

  describe("when passing a value of zero", () => {
    it("renders a value of 0", () => {
      render(<Badge value={0} />);

      const sumEl = screen.getByText("0");

      expect(sumEl).toBeInTheDocument();
    });
  });
});
