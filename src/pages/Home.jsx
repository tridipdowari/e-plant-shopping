import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(0, 0, 0, 0.6)", // overlay for readability
        color: "white",
        padding: "20px",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "10px" }}>
        🌿 Paradise Nursery
      </h1>

      <p style={{ marginTop: "10px", maxWidth: "600px" }}>
        Welcome to your one-stop shop for beautiful indoor plants.
      </p>

      <p style={{ maxWidth: "600px" }}>
        Explore a wide range of plants and manage your cart easily.
      </p>

      <button
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#4caf50",
          border: "none",
          color: "white",
          borderRadius: "5px",
          cursor: "pointer",
        }}
        onClick={() => navigate("/plants")}
      >
        Get Started
      </button>
    </div>
  );
}
