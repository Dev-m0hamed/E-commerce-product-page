import ProductSlider from "./ProductSlider";
import ProductInfo from "./ProductInfo";

function Content({setCart, setLightBox}) {
  return (
    <main className="container mx-auto md:max-w-[736px] lg:max-w-[992px] xl:max-w-[1110px] md:pt-20 md:flex md:items-center md:gap-15 lg:px-12 xl:px-25 lg:gap-30">
      <ProductSlider setLightBox={setLightBox} />
      <ProductInfo setCart={setCart} />
    </main>
  );
}

export default Content;
