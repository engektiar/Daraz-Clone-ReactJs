import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Home from "./Home";

import FlashProductDetails from "./Components/FlashSale/FlashProductDetails";
import CatagoryDetails from "./Components/PCategories/CatagoryDetails";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product:id" element={<FlashProductDetails />} />
        <Route path="/catagoryDetails" element={<CatagoryDetails />} />
        {/* <Route path="/product-details" element={<JustForProductDetiels />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
