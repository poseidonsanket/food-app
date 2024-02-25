import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import Mock_Data from "../mocks/resCardMock.json";
import { isOpenLabel } from "../RestaurantCard";
import "@testing-library/jest-dom";

test("Should render RestaurantCard component with props data", () => {
  render(<RestaurantCard resData={Mock_Data} />);

  const title = screen.getByText("McDonald's");

  expect(title).toBeInTheDocument();
});

test("Should render RestaurantCard component with promoted label", () => {
  const RestaurantCardOpen = isOpenLabel(RestaurantCard);

  render(<RestaurantCardOpen resData={Mock_Data} />);

  const label = screen.getByText("Open Now");

  expect(label).toBeInTheDocument();
});
