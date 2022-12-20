import React from "react";
import { render, screen } from "@testing-library/react";

import { Input } from "./Input";
import { InputProps } from "./input.types";

const makeSut = (rest?: Omit<InputProps, "children">) => {
  render(<Input {...rest} />);
};

describe("GIVEN <Input />", () => {
  describe("WHEN rendered", () => {
    it("THEN should properly disable the component", () => {
      makeSut({ disabled: true });
      expect(
        screen.getByRole<HTMLInputElement>("textbox").disabled
      ).toBeTruthy();
    });
  });

  describe("THEN should correctly render the submitted position and icon", () => {
    it("should render the submitted icon", () => {
      makeSut({ disabled: true, append: <svg data-testid="my-icon" /> });
      expect(screen.getByTestId("my-icon")).toBeDefined();
    });

    it("should render the icon sent to the start", () => {
      makeSut({
        disabled: true,
        append: <svg data-testid="my-icon" />,
        appendPosition: "start",
      });
      expect(screen.getByTestId("my-icon")).toBeDefined();
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppend_start"
      );
    });

    it("should render the icon sent to the end", () => {
      makeSut({
        disabled: true,
        append: <svg data-testid="my-icon" />,
        appendPosition: "end",
      });
      expect(screen.getByTestId("my-icon")).toBeDefined();
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppend_end"
      );
    });
  });

  describe("THEN should correctly render the submitted appearance", () => {
    it("THEN should correctly render the appearance default", () => {
      makeSut();
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppearance_neutral"
      );
    });

    it("THEN should correctly render the appearance neutral", () => {
      makeSut({ appearance: "neutral" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppearance_neutral"
      );
    });

    it("THEN should correctly render the appearance success", () => {
      makeSut({ appearance: "success" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppearance_success"
      );
    });

    it("THEN should correctly render the appearance warning", () => {
      makeSut({ appearance: "warning" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppearance_warning"
      );
    });

    it("THEN should correctly render the appearance danger", () => {
      makeSut({ appearance: "danger" });
      expect(screen.getByRole("textbox").getAttribute("class")).toContain(
        "inputAppearance_danger"
      );
    });
  });
});