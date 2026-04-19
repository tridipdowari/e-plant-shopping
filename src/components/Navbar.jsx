import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navbar() {
  const cartItems = useSelector((state) => state.cart.items);

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav style={{ background: "#1f1f1f", padding: "10px", color: "white" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>
        Home
      </Link>

      <Link to="/plants" style={{ marginRight: "15px", color: "white" }}>
        Plants
      </Link>

      <Link to="/cart" style={{ color: "white" }}>
        Cart ({totalCount})
      </Link>

      <Link to="/wishlist" style={{ marginLeft: "15px", color: "#e0e0e0" }}>
        Wishlist
      </Link>
    </nav>
  );
}
