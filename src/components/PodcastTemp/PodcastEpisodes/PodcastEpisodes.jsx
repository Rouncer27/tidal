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
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
};

const PodcastEpisodes = ({ data }) => {
  return (
    <div>
      <div>
        <div>
          <h2>{data.title}</h2>
        </div>
        <Slider {...settings}>
          {data.episodes.map((episode) => {
            return (
              <div>
                <div>
                  <h3 dangerouslySetInnerHTML={{ __html: episode.title }} />
                  <div
                    dangerouslySetInnerHTML={{ __html: episode.description }}
                  />
                  <div>
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
