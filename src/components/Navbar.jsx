import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector(state => state.cart.items);

  const totalCount = cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav style={{ background: "#2e7d32", padding: "10px", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>
        Home
      </Link>

      <Link to="/plants" style={{ marginRight: "15px", color: "white" }}>
        Plants
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({totalCount})
      </Link>
    </nav>
  );
}