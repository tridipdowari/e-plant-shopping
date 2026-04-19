import { useState } from "react";
import plants from "../data/plants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";
import ProductCard from "../components/ProductCard";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  return (
    <div className="container">
      <h1>Plants</h1>

      <div className="grid">
        {plants.map((plant) => (
          <ProductCard
            key={plant.id}
            plant={plant}
            onAdd={(plant) => {
              dispatch(addItem(plant));
              setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
            }}
            disabled={addedItems[plant.id]}
          />
        ))}
      </div>
    </div>
  );
}
