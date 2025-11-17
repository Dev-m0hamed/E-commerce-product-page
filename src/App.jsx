import { useState } from "react";
import Header from "./components/header/Header";
import Content from "./components/Content";
import Lightbox from "./components/Lightbox";

function App() {
  const [cart, setCart] = useState(0);
  const [lightBox, setLightBox] = useState(false);
  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <Content
        setCart={setCart}
        setLightBox={setLightBox}
      />
      <Lightbox lightBox={lightBox} setLightBox={setLightBox} />
    </>
  );
}

export default App;
