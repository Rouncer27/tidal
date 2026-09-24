import React, { useEffect, useState } from "react";
import "./podcastEpisodes.scss";
import reactSlick from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider = reactSlick.default || reactSlick;

const PodcastEpisodes = ({ data }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 2,
    slidesToScroll: 1,
    arrows: true,
    centerMode: !isMobile,
    centerPadding: isMobile ? "0" : "16.6667%",
  };

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
