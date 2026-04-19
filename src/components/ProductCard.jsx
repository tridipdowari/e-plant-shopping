export default function ProductCard({ plant, onAdd, onWishlist, disabled }) {
  return (
    <div className="card">
      <img src={plant.image} width="120" />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <p>{plant.category}</p>

      <button onClick={() => onAdd(plant)} disabled={disabled}>
        {disabled ? "Added" : "Add to Cart"}
      </button>
      <button onClick={() => onWishlist(plant)}>❤️ Wishlist</button>
    </div>
  );
}
