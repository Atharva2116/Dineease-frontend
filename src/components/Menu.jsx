import "../assets/css/menu.css";
import Card from './Card';
import { foodItems } from "./data";

const Menu = () => (
  <div className="popular" id="menu">
    <h1 className="popular-heading">Most <span>Popular</span> Food</h1>
    <div className="container">
      <div className="custom-row">
        {foodItems.map(item => (
          <div className="custom-col" key={item.id}>
            <Card
              id={item.id} // ✅ Make sure this is passed
              name={item.name}
              price={item.price}
              image={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default Menu;
