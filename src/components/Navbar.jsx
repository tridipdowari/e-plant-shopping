import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  return (
    <nav style={{ padding: "10px", background: "#222", color: "white" }}>
      <h2>🌿 Paradise Nursery</h2>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white" }}>
          Home
        </Link>
        <Link to="/plants" style={{ color: "white" }}>
          Plants
        </Link>
        <Link to="/cart" style={{ color: "white" }}>
          Cart ({totalCount})
        </Link>
      </div>
    </nav>
  );
}
