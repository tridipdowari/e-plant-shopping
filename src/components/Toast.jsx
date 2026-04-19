import { useEffect } from "react";

export default function Toast({ message, show, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => {
        onClose();
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [show]);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        background: "#4caf50",
        color: "white",
        padding: "10px 15px",
        borderRadius: "5px",
        transition: "all 0.3s ease",
      }}
    >
      {message}
    </div>
  );
}