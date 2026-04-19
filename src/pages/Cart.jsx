import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const cartItems = useSelector((state) => state.cart.items);

  const calculateTotalAmount = () => {
    return cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
  };

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

      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      <h2 style={{ marginTop: "20px" }}>
        Total Amount: ₹{calculateTotalAmount()}
      </h2>
    </div>
  );
}