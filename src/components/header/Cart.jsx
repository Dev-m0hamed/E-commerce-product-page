import product from "../../assets/image-product-1-thumbnail.jpg";

function Cart({ openCart, cart, setCart }) {
  return (
    <div
      data-testid="cart"
      className={`absolute top-[115%] w-[94vw] left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-2xl z-20 transition-all duration-300 md:w-[350px] md:top-[90%] md:left-full md:-translate-x-full ${
        openCart ? "animate-dropFade" : "invisible animate-upFade"
      }`}
    >
      <h2 className="p-5 font-bold">Cart</h2>
      <hr className="text-grayish-blue" />
      <div className="p-5 h-44">
        {cart > 0 ? (
          <div>
            <div className="flex items-center justify-between">
              <img
                src={product}
                alt="product-1-thumbnail"
                className="size-15 rounded-md"
              />
              <div>
                <h2 className="text-dark-grayish-blue">
                  Fall Limited Edition Sneaker
                </h2>
                <span className="text-dark-grayish-blue">
                  $125.00 x {cart}{" "}
                </span>
                <span className="font-bold ml-1">
                  ${(cart * 125).toFixed(2)}
                </span>
              </div>
              <svg
                data-testid="delete"
                onClick={() => setCart(0)}
                className="cursor-pointer"
                width="14"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <defs>
                  <path
                    d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                    id="a"
                  />
                </defs>
                <use fill="#C3CAD9" fillRule="nonzero" xlinkHref="#a" />
              </svg>
            </div>
            <button className="bg-orange p-4 w-full rounded-xl mt-5 font-bold cursor-pointer">
              Checkout
            </button>
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <p className="text-dark-grayish-blue font-bold">
              Your cart is empty.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Cart;
