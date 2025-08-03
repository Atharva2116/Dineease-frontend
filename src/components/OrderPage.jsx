import "../assets/css/order.css";
import { useCart } from "../context/CartContext";
import Swal from "sweetalert2";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { sendOrderEmail } from "../utils/email"; // EmailJS function

const OrderPage = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    address: "",
    pinCode: "",
    phone: "",
  });
  const [placingOrder, setPlacingOrder] = useState(false);

  const navigate = useNavigate();
  const { cart, removeOneFromCart, incrementQuantity, clearCart } = useCart();

  const getTotal = () =>
    cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

 const handleOrder = async () => {
  const { name, email, address, pinCode, phone } = userData;

  if (!name || !email || !address || !pinCode || !phone) {
    Swal.fire("Missing Fields", "Please fill in all fields.", "warning");
    return;
  }

  setPlacingOrder(true);

  try {
    // Try email sending
    await sendOrderEmail(userData, cart, getTotal());
    console.log("Email sent successfully");
  } catch (error) {
    console.error("Email sending failed:", error);
    Swal.fire("Error", "Failed to send confirmation email.", "error");
    setPlacingOrder(false);
    return; // stop if email failed
  }

  try {
    // Try clearing cart
    clearCart();
    navigate("/thank-you");
    Swal.fire({
      title: "🎉 Order Placed!",
      html: `<p>Your order will be delivered to:</p><strong>${userData.address}</strong>`,
      icon: "success",
      confirmButtonText: "Great!",
      confirmButtonColor: "#3085d6",
    });
  } catch (error) {
    console.error("Post-email actions failed:", error);
    Swal.fire("Error", "Something went wrong after placing the order.", "error");
  } finally {
    setPlacingOrder(false);
  }
};


  return (
    <div className="order-container">
      <h1 className="order-title">Your Cart</h1>
      <p className="order-subtitle">Review your items before placing the order</p>

      {cart.length === 0 ? (
        <div className="empty-cart">🛒 Your cart is empty.</div>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Item</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>₹{item.price}</td>
                  <td>
                    <div className="quantity-controls">
                      <button
                        className="decrement-btn"
                        onClick={() => removeOneFromCart(item.id)}
                      >
                        −
                      </button>
                      <span className="qty">{item.quantity}</span>
                      <button
                        className="increment-btn"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td>₹{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="summary-section">
            <h2 className="order-subtitle">Order Summary</h2>
            <ul>
              {cart.map((item, index) => (
                <li key={index}>
                  {item.name} × {item.quantity} = ₹{item.price * item.quantity}
                </li>
              ))}
            </ul>
          </div>

          <div className="total-container">
            <span>Grand Total:</span>
            <span className="amount">₹{getTotal()}</span>
          </div>

          <div className="order-form">
            <h2 className="order-subtitle">Your Details</h2>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={userData.name}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={userData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="address"
              placeholder="Delivery Address"
              value={userData.address}
              onChange={handleChange}
            />
            <input
              type="text"
              name="pinCode"
              placeholder="Pin Code"
              value={userData.pinCode}
              onChange={handleChange}
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={userData.phone}
              onChange={handleChange}
            />
          </div>

          <button
            className="order-button"
            onClick={handleOrder}
            disabled={placingOrder}
          >
            {placingOrder ? "Placing Order..." : "Place Order"}
          </button>
        </>
      )}
    </div>
  );
};

export default OrderPage;
