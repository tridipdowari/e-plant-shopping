import { useState } from "react";
import plants from "../data/plants";
import { useDispatch } from "react-redux";
import ProductCard from "../components/ProductCard";
import Toast from "../components/Toast";
import { addItem, addToWishlist } from "../redux/CartSlice";

export default function ProductList() {
  const dispatch = useDispatch();
  const [addedItems, setAddedItems] = useState({});
  const [toast, setToast] = useState({
    show: false,
    message: "",
  });

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

              setToast({
                show: true,
                message: "Added to cart",
              });
            }}
            onWishlist={(plant) => {
              dispatch(addToWishlist(plant));

              setToast({
                show: true,
                message: "Added to wishlist",
              });
            }}
            disabled={addedItems[plant.id]}
          />
        ))}
      </div>

      <Toast
        show={toast.show}
        message={toast.message}
        onClose={() => setToast({ show: false, message: "" })}
      />
    </div>
  );
}
