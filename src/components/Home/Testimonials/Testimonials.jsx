import React from "react";
import reactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./testimonials.scss";
const Slider = reactSlick.default || reactSlick;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
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
    </div>
  );
};

export default Testimonials;
