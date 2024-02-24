import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("TestCases for Contact Component", () => {
  test("Should load Contact Component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  test("Should load Button inside Contact Component", () => {
    render(<Contact />);

    const button = screen.getByRole("button");

    expect(button).toBeInTheDocument();
  });

  test("Should load input name inside Contact Component", () => {
    render(<Contact />);

    const inputName = screen.getByPlaceholderText("name");

    expect(inputName).toBeInTheDocument();
  });

  test("Should load two input boxes inside Contact Component", () => {
    render(<Contact />);

    //Querying
    const inputBoxes = screen.getAllByRole("textbox"); //Returns JSX Elements

    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
