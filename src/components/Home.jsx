import "../assets/css/home.css"; // Ensure this path is correct
import Menu from "./Menu";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>
          <strong>
            FRESH <span>FLAVORS</span> ANYTIME, EVERYTIME
          </strong>
        </h3>
        <motion.p
       initial={{ opacity: 0, scale: 0.95 }}
animate={{ opacity: 1, scale: 1 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.4, ease: "easeOut" }}
          className="text-xl text-gray-700 mt-4 max-w-2xl mx-auto text-center"
        >
          Good food is the foundation of genuine happiness — come savor every
          moment, one bite at a time.
        </motion.p> 

        <a href="#menu" className="btn">
          Get Yours Now
        </a>
      </div>
    </section>
  );
};

export default Home;
