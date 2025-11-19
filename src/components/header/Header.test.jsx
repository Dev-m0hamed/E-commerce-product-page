import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Header from "./Header";

describe("Header", () => {
  const user = userEvent.setup();
  it("shows 'cart is empty' when cart is 0", () => {
    render(<Header cart={0} />);
    expect(screen.getByAltText("avatar")).toBeInTheDocument();
    expect(screen.getByTestId("quantity")).toHaveTextContent("");
    expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
  });

  it("shows product details when cart is > 0", () => {
    render(<Header cart={2} />);
    expect(screen.getByTestId("quantity")).toHaveTextContent(2);
    expect(screen.queryByText(/your cart is empty/i)).not.toBeInTheDocument();
    expect(
      screen.getByText(/Fall Limited Edition Sneaker/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/\$125\.00 x 2/)).toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
  });

  it("toggle cart when clicking toggle cart button", async () => {
    render(<Header />);
    await user.click(screen.getByTestId("toggle-cart"));
    expect(screen.getByTestId("cart")).toHaveClass("animate-dropFade");
    await user.click(screen.getByTestId("toggle-cart"));
    expect(screen.getByTestId("cart")).toHaveClass("invisible animate-upFade");
  });
});
