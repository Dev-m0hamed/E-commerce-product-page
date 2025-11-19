import { render, screen } from "@testing-library/react";
import ProductSlider from "./ProductSlider";
import { images, thumbnails } from "../data/images";

describe("ProductSlider", () => {
  it("display product images", () => {
    render(<ProductSlider />);
    const imgs = screen.getAllByAltText("product");
    expect(imgs.length).toEqual(images.length);
    const thumbnail = screen.getAllByAltText("product-thumbnail");
    expect(thumbnail.length).toEqual(thumbnails.length);
  });
});
