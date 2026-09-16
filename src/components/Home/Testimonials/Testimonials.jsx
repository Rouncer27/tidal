import React from "react";
import reactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";
import quoteImage from "../../../assets/quote-icon.png";
const Slider = reactSlick.default || reactSlick;

console.log("quoteImage: ", quoteImage);

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
};

const Testimonials = ({ testimonials }) => {
  return (
    <div className="testimonials">
      <div className="testimonials-wrapper">
        <div className="testimonials-title">
          <h2>Hear From Our Clients</h2>
        </div>
        <Slider className="testimonials-slider" {...settings}>
          {testimonials.map((test, index) => {
            return (
              <div className="testimonials-slide" key={index}>
                <div
                  className="testimonials-slide-content"
                  dangerouslySetInnerHTML={{
                    __html: test.node.testimonialPost.testimonialQuote,
                  }}
                />
                <p className="testimonials-slide-author">{test.node.title}</p>
              </div>
            );
          })}
        </Slider>
      </div>
      <div className="testimonials-image">
        <img src={quoteImage.src} alt="Testimonials Quote" />
      </div>
    </div>
  );
};

export default Testimonials;
