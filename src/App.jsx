import { useState } from "react";
import ProductList from "./pages/ProductList";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div>
      {!showProducts ? (
        <div style={{ textAlign: "center", padding: "20px" }}>
          <h1>Welcome to Paradise Nursery</h1>

          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <ProductList />
      )}
    </div>
  );
}