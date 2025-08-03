import "../assets/css/about.css";
import AboutImg from "../assets/images/bg.jpg";

const About = () => {
  return (
    <section id="about-us">
      <h1 className="heading">
        About <span>Us</span>
      </h1>
      <div className="row">
        <div className="image">
          <img src={AboutImg} alt="About Us" />
        </div>
        <div className="content">
          <h3>What makes our food special?</h3>
          <p>
            Welcome to <strong>DineEase</strong>, where culinary passion meets
            exceptional service. Our mission is to deliver an unforgettable
            dining experience by blending authentic flavors, seasonal
            ingredients, and a cozy ambiance that feels like home.
          </p>
          <p>
            Whether you're here for a romantic dinner, a family gathering, or a
            casual lunch, our chefs craft each dish with care and creativity. We
            believe in more than just serving food — we create moments that
            bring people together around the table.
          </p>
          
          <a href="#menu" className="btn">
            Order Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
