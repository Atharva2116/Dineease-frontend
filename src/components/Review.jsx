
import '../assets/css/review.css'; 
import reviewImage from '../assets/images/review.png'; // Adjust path if needed

const reviews = [
  {
    id: 1,
    name: 'Sarah J',
    text: `Foodies is a true gem! The menu offers a diverse culinary journey. Flavors are exquisite, and
      the ambiance creates a memorable experience. Highly recommend`,
    stars: [true, true, true, true, false]
  },
  {
    id: 2,
    name: 'John D',
    text: `Recently tried Foodies' specialty dishes—mind-blowing creativity and taste. Each dish is a
      masterpiece, attention to detail is commendable. A gem for food enthusiasts!`,
    stars: [true, true, true, false, false]
  },
  {
    id: 3,
    name: 'Emily P',
    text: `Foodies never disappoints! Popular food choices are a testament to the chef's expertise. From
      appetizers to desserts, every bite is a burst of flavor. Top-notch service!`,
    stars: [true, true, true, false, false]
  },
  {
    id: 4,
    name: 'Alex M',
    text: `Fantastic experience at Foodies! The reviews were right—this place lives up to its name. The
      fusion of flavors in the dishes is unparalleled. Friendly and knowledgeable staff.`,
    stars: [true, true, true, true, false]
  }
];

const Review = () => (
  <section id="review">
    <div className="reviews">
      <h1 className="heading">Our <span>Reviews</span></h1>
 
      <div className="review-box">
        {reviews.map(review => (
          <div className="review-card" key={review.id}>
            <div className="card"id='card-r'>
              <div className="card-top">
                <img src={reviewImage} id='ca-im' alt={`${review.name}'s review`} />
              </div>
              <h2>{review.name}</h2>
              <p>{review.text}</p>
              <div className="review-icon">
                {review.stars.map((star, index) => (
                  <i
                    key={index}
                    className={`bx ${star ? 'bxs-star' : 'bx-star'}`}
                    style={{ color: '#e7ab0e' }}
                  ></i>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Review;
