import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <Router>

      <div style={{ textAlign: "center", padding: "20px" }}>
        <h1>Welcome to Paradise Nursery</h1>

        <button
          onClick={() => (window.location.href = "/#/plants")}
        >
          Get Started
        </button>
      </div>

      {/* Existing routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

    </Router>
  );
}