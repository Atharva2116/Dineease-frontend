import PropTypes from "prop-types";
import "../assets/css/card.css";
import { useCart } from "../context/CartContext";

const Card = ({ id, name, price, image }) => {
  const { addToCart } = useCart();

  return (
    <div className="card h-100">
      <img src={image} className="card-img-top" alt={name} />
      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <p className="card-text">₹{price}</p>
        <button
          className="btn"
          type="button"
          onClick={() => addToCart({ id, name, price })}
        >
          Order Now
        </button>
      </div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
};

export default Card;
