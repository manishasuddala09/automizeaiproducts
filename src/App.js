import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductDetailsPage from "./components/ProductDetailsPage";

import "./App.css";

function App() {
  return (
    <BrowserRouter>.
      <Routes>
        <Route path="/" exact element={<HomePage/>} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;