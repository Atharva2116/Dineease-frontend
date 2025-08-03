import "../assets/css/footer.css"; // Make sure to import your CSS file

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-container">
          <div className="footer-section">
            <h2>Contact Us</h2>
            <div className="contact-list">
              <p><i className='bx bxl-gmail' style={{ color: '#eabd05' }}></i><span> @fastfood.com</span></p>
              <p><i className='bx bxs-phone' style={{ color: '#eabd05' }}></i> 711346572</p>
            </div>
          </div>
          <div className="footer-section">
            <h2>Follow Us</h2>
            <div className="contact-icons">
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-facebook-circle'></i></a>
            </div>
          </div>
          <div className="footer-section">
            <div className="location">
              <h2>Address</h2>
              <p>Pict, Dhankawadi</p>
              <p>Pune</p>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>Developed by Atharva Dandgawhal @2024 Fast Food. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
