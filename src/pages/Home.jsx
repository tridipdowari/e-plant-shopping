import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="container" style={{ textAlign: "center" }}>
      <h1>🌿 Paradise Nursery</h1>

      <p style={{ marginTop: "10px" }}>
        Welcome to your one-stop shop for beautiful indoor plants.
      </p>

      <p>
        Explore a wide range of plants and manage your cart easily.
      </p>

      <button
        style={{ marginTop: "20px" }}
        onClick={() => navigate("/plants")}
      >
        Shop Now
      </button>
    </div>
  );
}