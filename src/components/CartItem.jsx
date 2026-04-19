import { useDispatch } from "react-redux";
import { removeItem, updateQuantity } from "../redux/CartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="card">
      <img src={item.image} width="100" />

      <h3>{item.name}</h3>

      <p>Price: ₹{item.price}</p>
      <p>Quantity: {item.quantity}</p>

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
  );
}