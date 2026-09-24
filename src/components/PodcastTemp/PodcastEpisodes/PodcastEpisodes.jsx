import React from "react";
import "./podcastEpisodes.scss";
import reactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = reactSlick.default || reactSlick;

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 1,
  arrows: true,
  centerMode: true,
  centerPadding: "16.6667%",

  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: false,
        centerPadding: "0",
      },
    },
  ],
};

const PodcastEpisodes = ({ data }) => {
  return (
    <div className="pod-eps">
      <div className="pod-eps-wrapper">
        <div className="pod-eps-title">
          <h2>{data.title}</h2>
        </div>
        <Slider className="pod-eps-slider" {...settings}>
          {data.episodes.map((episode) => {
            return (
              <div className="pod-eps-slide">
                <div className="pod-eps-slide-container">
                  <h3 dangerouslySetInnerHTML={{ __html: episode.title }} />
                  <div
                    className="pod-eps-slide-container-content"
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                  />
                  <div className="pod-eps-slide-container-link">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={episode.link}
                    >
                      Listen Now
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default PodcastEpisodes;
