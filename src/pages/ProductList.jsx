import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../redux/CartSlice";
import plants from "../data/plants";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);

  const categories = [...new Set(plants.map((p) => p.category))];

  return (
    <div className="container">
      <h1>Plants</h1>

      {categories.map((category) => (
        <div key={category}>
          <h2>{category}</h2>

          <div className="grid">
            {plants
              .filter((p) => p.category === category)
              .map((plant) => (
                <ProductCard
                  key={plant.id}
                  plant={plant}
                  onAdd={() => dispatch(addItem(plant))}
                  disabled={cartItems.some((i) => i.id === plant.id)}
                />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}