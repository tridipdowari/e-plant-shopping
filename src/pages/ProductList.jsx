import { useState } from "react";
import plants from "../data/plants";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});

  return (
    <div>
      <h1>Plants</h1>

      {plants.map((plant) => (
        <div
          key={plant.id}
          style={{ border: "1px solid gray", margin: "10px", padding: "10px" }}
        >
          <img src={plant.image} width="100" />
          <h3>{plant.name}</h3>
          <p>₹{plant.price}</p>
          <p>{plant.category}</p>

          {/* 🔥 THIS WAS MISSING */}
          <button
            onClick={() => {
              dispatch(addItem(plant));
              setAddedItems((prev) => ({ ...prev, [plant.id]: true }));
            }}
            disabled={addedItems[plant.id]}
          >
            {addedItems[plant.id] ? "Added" : "Add to Cart"}
          </button>
        </div>
      ))}
    </div>
  );
}
