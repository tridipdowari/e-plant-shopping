export default function ProductCard({ plant, onAdd }) {
  return (
    <div className="card">
      <img src={plant.image} width="120" />
      <h3>{plant.name}</h3>
      <p>₹{plant.price}</p>
      <p>{plant.category}</p>

      <button onClick={() => onAdd(plant)}>
        Add to Cart
      </button>
    </div>
  );
}