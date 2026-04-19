import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function Cart() {
  const dispatch = useDispatch();
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

      {cartItems.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} width="100" />

          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* 🔥 FIXED BUTTONS */}
          <div className="cart-actions">
            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: 1 }))
              }
            >
              +
            </button>

            <button
              onClick={() =>
                dispatch(updateQuantity({ id: item.id, amount: -1 }))
              }
            >
              -
            </button>

            <button onClick={() => dispatch(removeItem(item.id))}>
              Delete
            </button>
          </div>

          <p>Total: ₹{item.price * item.quantity}</p>
        </div>
      ))}

      {/* TOTAL */}
      <h2 style={{ marginTop: "20px" }}>Total Amount: ₹{total}</h2>

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