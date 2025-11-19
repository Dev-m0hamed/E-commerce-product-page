import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ProductInfo from "./ProductInfo";

describe("ProductInfo", () => {
  const user = userEvent.setup();
  const setCart = vi.fn();

  it("renders product info correctly", () => {
    render(<ProductInfo />);
    expect(screen.getByText("Sneaker Company")).toBeInTheDocument();
    expect(
      screen.getByText("Fall Limited Edition Sneakers")
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer."
      )
    ).toBeInTheDocument();
    expect(screen.getByText("$125.00")).toBeInTheDocument();
    expect(screen.getByText("50%")).toBeInTheDocument();
    expect(screen.getByText("$250.00")).toBeInTheDocument();
  });

  it("increase quantity when clicking plus button", async () => {
    render(<ProductInfo />);
    expect(screen.getByTestId("quantity")).toHaveTextContent(0);
    await user.click(screen.getByTestId("plus"));
    expect(screen.getByTestId("quantity")).toHaveTextContent(1);
  });

  it("decrease quantity if > 0 when clicking minus button", async () => {
    render(<ProductInfo />);
    expect(screen.getByTestId("quantity")).toHaveTextContent(0);
    await user.click(screen.getByTestId("minus"));
    expect(screen.getByTestId("quantity")).toHaveTextContent(0);
    await user.click(screen.getByTestId("plus"));
    expect(screen.getByTestId("quantity")).toHaveTextContent(1);
    await user.click(screen.getByTestId("minus"));
    expect(screen.getByTestId("quantity")).toHaveTextContent(0);
  });

  it("calls setCart when clicking add to cart", async () => {
    render(<ProductInfo setCart={setCart} />);
    await user.click(screen.getByRole("button", { name: "Add to cart" }));
    await user.click(screen.getByTestId("plus"));
    expect(screen.getByTestId("quantity")).toHaveTextContent(1);
    await user.click(screen.getByRole("button", { name: "Add to cart" }));
    expect(setCart).toHaveBeenCalledTimes(2);
    expect(setCart).toHaveBeenNthCalledWith(1, 0);
    expect(setCart).toHaveBeenNthCalledWith(2, 1);
  });
});
