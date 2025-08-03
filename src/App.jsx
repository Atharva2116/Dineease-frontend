import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Review from "./components/Review";
import OrderPage from "./components/OrderPage";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Logout from "./auth/Logout";
import ProtectedRoute from "./auth/ProtectedRoute";
import TableBooking from "./components/TableBooking/TableBooking";
import { CartProvider } from "./context/CartContext";
import CheckoutPage from "./components/CheckoutPage";

import "./App.css";

function App() {
  return (
    <CartProvider>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/logout" element={<Logout />} />

        {/* Protected Routes */}
        <Route
          path="/home"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <div className="main-section-wrapper">
                  <div id="home">
                    <Home />
                  </div>
                  <div id="about">
                    <About />
                  </div>
                  <div id="menu">
                    <Menu />
                  </div>
                  <div id="review">
                    <Review />
                  </div>
                  <div id="footer">
                    <Footer />
                  </div>
                </div>
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/order"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <OrderPage />
              </>
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <CheckoutPage />
              </>
            </ProtectedRoute>
          }
        />

        <Route
          path="/book-table"
          element={
            <ProtectedRoute>
              <>
                <Navbar />
                <TableBooking />
              </>
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </CartProvider>
  );
}

export default App;
