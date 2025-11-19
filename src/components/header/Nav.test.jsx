import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Nav from "./Nav";

describe("navbar", () => {
  const user = userEvent.setup();
  it("renders elements correctly", () => {
    render(<Nav />);
    expect(screen.getByRole("navigation")).not.toHaveClass("translate-x-full");
    expect(screen.getByTestId("overlay")).toHaveClass("opacity-0 invisible");
    expect(screen.getByText("Collections")).toBeInTheDocument();
    expect(screen.getByText("Men")).toBeInTheDocument();
    expect(screen.getByText("Women")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
  });

  it("open menu when clicking open-menu button", async () => {
    render(<Nav />);
    await user.click(screen.getByTestId("open-menu"));
    expect(screen.getByRole("navigation")).toHaveClass("translate-x-full");
    expect(screen.getByTestId("overlay")).toHaveClass("opacity-100 visible");
    // close menu when clicking close-menu button
    await user.click(screen.getByTestId("close-menu"));
    expect(screen.getByRole("navigation")).not.toHaveClass("translate-x-full");
    expect(screen.getByTestId("overlay")).toHaveClass("opacity-0 invisible");
  });
});
