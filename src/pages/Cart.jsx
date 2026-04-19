import { useSelector, useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function Cart() {

  // 🔹 STEP 21.2 (ALWAYS at top inside function)
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  // 🔹 STEP 22 (TOTAL CALCULATION — goes here)
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // 🔹 STEP 21.3 (CONDITION — BEFORE return)
  if (cartItems.length === 0) {
    return <h2>Your cart is empty</h2>;
  }

  // 🔹 STEP 21.4 (MAIN UI)
  return (
    <div>
      <h1>Your Cart</h1>

      {cartItems.map(item => (
        <div
          key={item.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <img src={item.image} width="100" />
          <h3>{item.name}</h3>

          <p>Price: ₹{item.price}</p>
          <p>Quantity: {item.quantity}</p>

          {/* 🔹 Quantity buttons */}
          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: 1 }))}>
            +
          </button>

          <button onClick={() => dispatch(updateQuantity({ id: item.id, amount: -1 }))}>
            -
          </button>

          {/* 🔹 Delete */}
          <button onClick={() => dispatch(removeItem(item.id))}>
            Delete
          </button>

          {/* 🔹 Item total */}
          <p>Total: ₹{item.price * item.quantity}</p>
        </div>
      ))}

      {/* 🔹 TOTAL CART */}
      <h2>Total Amount: ₹{total}</h2>

      {/* 🔹 REQUIRED BUTTONS */}
      <button>Checkout (Coming Soon)</button>

      <button onClick={() => window.location.href = "/plants"}>
        Continue Shopping
      </button>
    </div>
  );
}