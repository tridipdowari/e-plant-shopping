import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/CartSlice";

export default function Wishlist() {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.cart.wishlist);

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="container">
        <h2>Your wishlist is empty</h2>
      </div>
    );
  }

  return (
    <div className="container">
      <h1>Wishlist</h1>

      {wishlist.map((item) => (
        <div className="card" key={item.id}>
          <img src={item.image} width="100" />
          <h3>{item.name}</h3>
          <p>₹{item.price}</p>

          <button onClick={() => dispatch(removeFromWishlist(item.id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}