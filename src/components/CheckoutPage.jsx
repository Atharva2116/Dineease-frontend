import  { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/checkout.css";
import { sendOrderEmail } from "../utils/email";

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { userData } = location.state || {};

  const [cart, setCart] = useState([]);
  const [placingOrder, setPlacingOrder] = useState(false);

  useEffect(() => {
    if (!userData?.email) {
      Swal.fire({
        title: "Missing Email",
        text: "Email is required for checkout. Please go back and try again.",
        icon: "error",
        confirmButtonText: "Go Back",
      }).then(() => navigate("/order"));
      return;
    }

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, [userData, navigate]);

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  const handleSubmit = async () => {
    if (placingOrder) return;
    setPlacingOrder(true);

    try {
      await sendOrderEmail(userData, cart, getTotal());

      Swal.fire({
        title: "🎉 Order Placed!",
        html: `<p>Your order will be delivered to:</p><strong>${userData.address}</strong>`,
        icon: "success",
        confirmButtonText: "Great!",
        confirmButtonColor: "#3085d6",
      });

      clearCart();
      navigate("/thank-you");
    } catch (error) {
      console.error("Order failed:", error);
      Swal.fire("Error", "Failed to send confirmation email.", "error");
    } finally {
      setPlacingOrder(false);
    }
  };

  return (
    <div className="checkout-container">
      <h2 className="checkout-title">Checkout</h2>

      <div className="checkout-details">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <>
            {cart.map((item, index) => (
              <p key={index}>
                {item.name} x {item.quantity} — ₹{item.price * item.quantity}
              </p>
            ))}
            <hr />
            <p>
              <strong>Total:</strong> ₹{getTotal()}
            </p>
          </>
        )}
      </div>

      <button
        className="checkout-button"
        onClick={handleSubmit}
        disabled={placingOrder || cart.length === 0}
      >
        {placingOrder ? "Placing Order..." : "Place Order"}
      </button>
    </div>
  );
};

export default CheckoutPage;
