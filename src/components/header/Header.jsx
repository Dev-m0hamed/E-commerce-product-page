import { useState } from "react";
import Nav from "./Nav";
import Cart from "./Cart";
import avatar from "../../assets/image-avatar.png";

function Header({ cart, setCart }) {
  const [openCart, setOpenCart] = useState(false);
  return (
    <header className="container mx-auto md:max-w-[736px] lg:max-w-[992px] xl:max-w-[1110px] flex justify-between items-center p-5 md:py-8 md:px-0 md:border-b md:border-b-grayish-blue relative">
      <Nav />

      <div className="flex items-center gap-5 md:gap-8">
        <div className="relative cursor-pointer">
          <svg
            data-testid="toggle-cart"
            onClick={() => setOpenCart(!openCart)}
            className="text-[#69707D] hover:text-black transition duration-300"
            width="22"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"
              fill="currentColor"
              fillRule="nonzero"
            />
          </svg>
          <span
            data-testid="quantity"
            className="absolute -top-2 left-2.5 text-white text-[10px] text-center bg-orange rounded-[20px] px-1.5 cursor-pointer"
          >
            {cart > 0 && cart}
          </span>
        </div>

        <Cart openCart={openCart} cart={cart} setCart={setCart} />

        <img
          src={avatar}
          alt="avatar"
          className="size-8 md:size-12 rounded-full border-3 border-transparent hover:border-orange cursor-pointer transition duration-300"
        />
      </div>
    </header>
  );
}

export default Header;
