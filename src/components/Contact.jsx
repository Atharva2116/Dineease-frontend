
import "../assets/css/contact.css";

const Contact = () => {
  return (
    <div className="order-now">
      <h1 className="heading">Order <span>Now</span></h1>
      <div className="order-image">
        <div className="container-order">
          <div className="order-image">
          <iframe
            className="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11993.267641772954!2d-72.8480109!3d41.2802068!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x36c6fa619c4f5603!2sMcDonald&#39;s!5e0!3m2!1sen!2s!4v1633364807635!5m2!1sen!2s"
            allowFullScreen
            loading="lazy"
            title="Google Map"
          ></iframe>
            
          </div>
          <div className="input-text">
            <input id="order-input" type="text" placeholder="Name" />
            <input id="order-input" type="email" placeholder="Email" />
            <br />
            <input id="order-input" type="number" placeholder="Number" />
            <input id="order-input" type="text" placeholder="Food Name" />
            <br />
            <textarea className="address" placeholder="Address" rows="10" cols="30"></textarea>
            <button id="order-btn" type="button" style={{ padding: "3px" }}>
              <i className='bx bx-cart' style={{ color: "white", fontSize: "20px" }}></i>Order Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
