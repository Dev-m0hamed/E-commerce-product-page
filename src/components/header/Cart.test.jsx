import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "./Cart";

describe("Cart", () => {
  const user = userEvent.setup();
  const setCart = vi.fn();
  it("renders cart based on openCart", () => {
    render(<Cart openCart={true} />);
    expect(screen.getByTestId("cart")).toHaveClass("animate-dropFade");
  });

  it("renders cart based on openCart", () => {
    render(<Cart openCart={false} />);
    expect(screen.getByTestId("cart")).toHaveClass("invisible animate-upFade");
  });

  it("sets cart empty when clicking delete button", async () => {
    render(<Cart cart={2} setCart={setCart} />);
    expect(
      screen.getByText(/Fall Limited Edition Sneaker/i)
    ).toBeInTheDocument();
    await user.click(screen.getByTestId("delete"));
    expect(setCart).toHaveBeenCalledOnce();
    expect(setCart).toHaveBeenCalledWith(0);
  });
});
