import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={item.image} width="100" />

      <h3>{item.name}</h3>

      <p>Price: ₹{item.price}</p>

      {/* 🔥 CLEAN QUANTITY CONTROL */}
      <div className="cart-actions">
        <button
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, amount: -1 }))
          }
        >
          -
        </button>

        <span style={{ margin: "0 10px" }}>
          {item.quantity}
        </span>

        <button
          onClick={() =>
            dispatch(updateQuantity({ id: item.id, amount: 1 }))
          }
        >
          +
        </button>
      </div>

      {/* 🔥 REMOVE BUTTON SEPARATE */}
      <button
        style={{ marginTop: "10px" }}
        onClick={() => dispatch(removeItem(item.id))}
      >
        Remove
      </button>

      <p>Total: ₹{item.price * item.quantity}</p>
    </div>
  );
}