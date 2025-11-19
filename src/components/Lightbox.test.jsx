import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Lightbox from "./Lightbox";
import { images, thumbnails } from "../data/images";

describe("Lightbox", () => {
  const setLightBox = vi.fn();
  const user = userEvent.setup();
  it("display product images", () => {
    render(<Lightbox />);
    const imgs = screen.getAllByAltText("product");
    expect(imgs.length).toEqual(images.length);
    const thumbnail = screen.getAllByAltText("product-thumbnail");
    expect(thumbnail.length).toEqual(thumbnails.length);
  });

  it("show lightbox based on lightBox prop", () => {
    render(<Lightbox lightBox={false} />);
    expect(screen.getByTestId("lightbox")).toHaveClass("opacity-0 invisible");
  });

  it("show lightbox based on lightBox prop", () => {
    render(<Lightbox lightBox={true} />);
    expect(screen.getByTestId("lightbox")).toHaveClass("opacity-100 visible");
  });

  it("close lightbox when clicking close icon", async () => {
    render(<Lightbox lightBox={true} setLightBox={setLightBox} />);
    expect(screen.getByTestId("lightbox")).toHaveClass("opacity-100 visible");
    await user.click(screen.getByTestId("close"));
    expect(setLightBox).toHaveBeenCalledOnce();
    expect(setLightBox).toHaveBeenCalledWith(false);
  });
});
