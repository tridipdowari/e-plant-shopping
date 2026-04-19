export default function ProductCard({ plant, onAdd, disabled }) {
  return (
    <div className="card">
      <img src={plant.image} width="120" />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>

      <button onClick={onAdd} disabled={disabled}>
        {disabled ? "Added" : "Add to Cart"}
      </button>
    </div>
  );
}