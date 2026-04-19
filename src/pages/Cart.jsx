import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  // total calculation
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // empty cart
  if (cartItems.length === 0) {
    return (
      <div className="container">
        <h2>Your cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Your Cart</h1>

      {/* 🔥 USING CartItem COMPONENT (IMPORTANT FOR Q7) */}
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* TOTAL */}
      <h2 style={{ marginTop: "20px" }}>
        Total Amount: ₹{total}
      </h2>

      {/* ACTION BUTTONS */}
      <div className="bottom-actions">
        <button>Checkout (Coming Soon)</button>

        <button onClick={() => (window.location.href = "/#/plants")}>
          Continue Shopping
        </button>
      </div>
    </div>
  );
}