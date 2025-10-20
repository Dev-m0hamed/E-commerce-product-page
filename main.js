const menu = document.getElementById("menu");
const overlay = document.getElementById("overlay");
const slidesMain = document.querySelectorAll(".slide");
const prevMain = document.getElementById("prev");
const nextMain = document.getElementById("next");
const thumbnailsMain = document.querySelectorAll("#thumbnails img");
const cart = document.getElementById("cart");
const emptyCart = document.getElementById("emptyCart");
const filledCart = document.getElementById("filledCart");
const lightBox = document.getElementById("lightBox");
const slidesPopup = document.querySelectorAll(".slide-popup");
const prevPopup = document.getElementById("prevPopup");
const nextPopup = document.getElementById("nextPopup");
const thumbnailsPopup = document.querySelectorAll("#thumbnailsPopup img");
const quantity = document.getElementById("quantity");
const totalCount = document.getElementById("totalCount");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

// mobile menu
function openMenu() {
  menu.classList.add("translate-x-full");
  overlay.classList.remove("invisible", "opacity-0");
}
function closeMenu() {
  menu.classList.remove("translate-x-full");
  overlay.classList.add("opacity-0");
  setTimeout(() => overlay.classList.add("invisible"), 300);
}

// slider
function handleSlide(slides, thumbnails, prevBtn, nextBtn) {
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.style.opacity = i === index ? "1" : "0";
    });
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === slides.length - 1;

    thumbnails.forEach((thumbnail, i) => {
      if (i === index) thumbnail.classList.add("active");
      else thumbnail.classList.remove("active");
      thumbnail.parentElement.style.borderColor =
        i === index ? "var(--color-orange)" : "transparent";
    });
    current = index;
  }
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.addEventListener("click", () => {
      showSlide(i);
    });
  });
  nextBtn.addEventListener("click", () => {
    if (current < slides.length - 1) {
      current++;
      showSlide(current);
    }
  });
  prevBtn.addEventListener("click", () => {
    if (current > 0) {
      current--;
      showSlide(current);
    }
  });
  showSlide(current);
}
handleSlide(slidesMain, thumbnailsMain, prevMain, nextMain);

// Show Cart
function showCart() {
  if (cart.classList.contains("invisible")) {
    cart.classList.remove("invisible", "animate-upFade");
    cart.classList.add("animate-dropFade");
  } else {
    cart.classList.remove("animate-dropFade");
    cart.classList.add("animate-upFade");
    setTimeout(() => cart.classList.add("invisible"), 500);
  }
}

// handle lightbox
function showLightBox() {
  lightBox.classList.remove("opacity-0", "invisible");
  handleSlide(slidesPopup, thumbnailsPopup, prevPopup, nextPopup);
}

function closeLightBox() {
  lightBox.classList.add("opacity-0", "invisible");
}

// handle cart
let count = 0;
function updateCount() {
  quantity.textContent = count;
}
updateCount();

function handleCart() {
  if (count > 0) {
    totalCount.textContent = count;
    cartCount.textContent = count;
    totalPrice.textContent = `$${(count * 125).toFixed(2)}`
    emptyCart.classList.add("hidden");
    filledCart.classList.remove("hidden");
  }
}

function increase() {
  count++;
  updateCount();
}

function decrease() {
  if (count > 0) {
    count--;
    updateCount();
  }
  if (count === 0) {
    deleteItem();
  }
}

function deleteItem() {
  totalCount.textContent = "";
  emptyCart.classList.remove("hidden");
  filledCart.classList.add("hidden");
  count = 0;
  updateCount();
}