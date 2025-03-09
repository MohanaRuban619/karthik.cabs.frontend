import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const DestinationsCarousel = ({ bg_3, place_1, place_2, place_3, place_4 }) => {
  const destinations = [
    { name: "Kerala Backwaters", tours: 8, image: place_1 },
    { name: "Ooty Hills", tours: 2, image: place_2 },
    { name: "Hampi, Karnataka", tours: 5, image: place_3 },
    { name: "Rameshwaram", tours: 5, image: place_4 },
  ];

  return (
    <section
      className="ftco-section img ftco-select-destination"
      style={{ backgroundImage: `url(${bg_3})` }}
    >
      <div className="container">
        <div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center">
            <span className="subheading">South Indian Places</span>
            <h2 className="mb-4">Explore South India’s Top Destinations</h2>
          </div>
        </div>
      </div>

      <div className="container container-2">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={10}
          slidesPerView={1} // Default for mobile
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            600: { slidesPerView: 2 }, // 2 slides for medium screens
            1000: { slidesPerView: 3 }, // 3 slides for large screens
            1200: { slidesPerView: 4 }, // 4 slides for desktop
          }}
          style={{
            transform: `translate(0px, 0px)`,
            transition: `all 0s ease 0s`,
            // width: `2700px`,
            padding:`1em 0 1em 0`
          }}
          className="swiper-container owl-stage"
        >
          {destinations.map((destination, index) => (
            <SwiperSlide key={index} className="owl-item " style={{ width: `270px`, marginRight: `10px` }}>
              <div className="item">
              <div className="project-destination">
                <a
                //   href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination.image})` }}
                >
                  <div className="text">
                    <h3>{destination.name}</h3>
                    <span>{destination.tours} Tours</span>
                  </div>
                </a>
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default DestinationsCarousel;
