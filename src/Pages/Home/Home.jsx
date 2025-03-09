import React, { useEffect, useRef, useState } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import bg_3 from "../../assets/images/bg_3.jpg";
import bg_5 from "../../assets/images/bg_5.jpg";

import Kerala_backwater from "../../assets/images/Kerala_backwater.jpg";
import services_2 from "../../assets/images/services-2.jpg";
import services_3 from "../../assets/images/services-3.jpg";
import services_4 from "../../assets/images/services-4.jpg";
import place_1 from "../../assets/images/place-1.jpg";
import place_2 from "../../assets/images/place-2.jpg";
import place_3 from "../../assets/images/place-3.jpg";
import place_4 from "../../assets/images/place-4.jpg";

import destination_1 from "../../assets/images/destination-1.jpg";
import destination_2 from "../../assets/images/destination-2.jpg";
import destination_3 from "../../assets/images/destination-3.jpg";
import destination_4 from "../../assets/images/destination-4.jpg";
import destination_5 from "../../assets/images/destination-5.jpg";
import destination_6 from "../../assets/images/destination-6.jpg";
import { useLocation } from "react-router-dom";

const Home = () => {
  const [height, setHeight] = useState(window.innerHeight);
  const aboutRef = useRef(null);
  const homeRef = useRef(null);
  const destinationRef = useRef(null);
  // Update height on window resize
  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);

    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Get query parameter from URL
  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    if (searchParams.has("about")) {
      scrollToSection(aboutRef);
    }else if (searchParams.has("destinations")) {
      scrollToSection(destinationRef);
    }else{
      scrollToSection(homeRef);
    }
  }, [location]); // Runs when the URL changes

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing if needed
  }, []);

  return (
    <div  ref={homeRef} id="home">
      <Navbar />
      <div
        className="hero-wrap js-fullheight"
        style={{ backgroundImage: `url(${bg_5})`, height: `${height}px` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-center"
            style={{ height: `${height}px` }}
            data-scrollax-parent="true"
          >
            <div className="col-md-7 ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Welcome to Karthik Cabs</span>
              <h1 className="mb-4">Discover Your Favorite Place with Us</h1>
              <p className="caps">
                Travel to any corner of South India with ease and comfort.
              </p>
            </div>
            {/* <a href="https://vimeo.com/45830194" className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4">
					<span className="fa fa-play"></span>
				</a> */}
          </div>
        </div>
      </div>

      {/* <SearchSection/> */}
      <section className="ftco-section services-section">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-centercol-md-6 order-md-last heading-section pl-md-5 ftco-animate d-flex align-items-center fadeInUp ftco-animated">
              <div className="w-100">
                <span className="subheading">Welcome to Karthik Cabs</span>
                <h2 className="mb-4">Explore the Beauty of South India</h2>
                <p>
                  From the serene backwaters of Kerala to the majestic temples
                  of Tamil Nadu, South India is a land of rich culture,
                  heritage, and breathtaking landscapes.
                </p>
                <p>
                  Whether you're looking for a peaceful retreat in Coorg, an
                  adventure in the Western Ghats, or a spiritual journey to
                  Tirupati, Karthik Cabs ensures a comfortable and memorable
                  travel experience.
                </p>
                <p>
                  {/* <a href="#" className="btn btn-primary py-3 px-4">Book Your Ride</a> */}
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                  <div
                    className="services services-1 color-1 d-block img"
                    style={{ backgroundImage: `url(${Kerala_backwater})` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-paragliding"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Activities</h3>
                      <p>
                        Experience thrilling adventures like trekking in Munnar,
                        boating in Kerala backwaters, and paragliding in Tamil
                        Nadu.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                  <div
                    className="services services-1 color-2 d-block img"
                    style={{ backgroundImage: `url(${services_2})` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-route"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Travel Arrangements</h3>
                      <p>
                        We provide hassle-free travel planning, from car rentals
                        to customized South Indian tour packages.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                  <div
                    className="services services-1 color-3 d-block img"
                    style={{ backgroundImage: `url(${services_3})` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-tour-guide"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Private Guide</h3>
                      <p>
                        Explore the rich history and culture of South India with
                        experienced local guides who bring destinations to life.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-12 col-lg-6 d-flex align-self-stretch ftco-animate fadeInUp ftco-animated">
                  <div
                    className="services services-1 color-4 d-block img"
                    style={{ backgroundImage: `url(${services_4})` }}
                  >
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="flaticon-map"></span>
                    </div>
                    <div className="media-body">
                      <h3 className="heading mb-3">Location Manager</h3>
                      <p>
                        Get expert recommendations on the best places to visit
                        in Kerala, Tamil Nadu, Karnataka, and Andhra Pradesh.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        className="ftco-section img ftco-select-destination"
        style={{ backgroundImage: `url(${bg_3})` }}
      >
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">South Indian Places</span>
              <h2 className="mb-4">Explore South India’s Top Destinations</h2>
            </div>
          </div>
        </div>
        <div className="container container-2">
          <div className="row">
            <div className="col-md-12">
              <div className="carousel-destination owl-carousel ftco-animate owl-loaded owl-drag fadeInUp ftco-animated">
                <div className="owl-stage-outer">
                  <div
                    className="owl-stage"
                    style={{
                      transform: `translate(0px, 0px)`,
                      transition: `all 0s ease 0s`,
                      width: `2700px`,
                    }}
                  >
                    <div
                      className="owl-item "
                      style={{ width: `270px`, marginRight: `10px` }}
                    >
                      <div className="item">
                        <div className="project-destination">
                          <a
                            href="#"
                            className="img"
                            style={{ backgroundImage: `url(${place_1})` }}
                          >
                            <div className="text">
                              <h3>Kerala Backwaters</h3>
                              <span>8 Tours</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item "
                      style={{ width: `270px`, marginRight: `10px` }}
                    >
                      <div className="item">
                        <div className="project-destination">
                          <a
                            href="#"
                            className="img"
                            style={{ backgroundImage: `url(${place_2})` }}
                          >
                            <div className="text">
                              <h3>Ooty Hills</h3>
                              <span>2 Tours</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item "
                      style={{ width: `270px`, marginRight: `10px` }}
                    >
                      <div className="item">
                        <div className="project-destination">
                          <a
                            href="#"
                            className="img"
                            style={{ backgroundImage: `url(${place_3})` }}
                          >
                            <div className="text">
                              <h3>Hampi, Karnataka</h3>
                              <span>5 Tours</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div
                      className="owl-item "
                      style={{ width: `270px`, marginRight: `10px` }}
                    >
                      <div className="item">
                        <div className="project-destination">
                          <a
                            href="#"
                            className="img"
                            style={{ backgroundImage: `url(${place_4})` }}
                          >
                            <div className="text">
                              <h3>Rameshwaram</h3>
                              <span>5 Tours</span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section ref={destinationRef} id="destination" className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate fadeInUp ftco-animated">
              <span className="subheading">Destination</span>
              <h2 className="mb-4">Tour Destination</h2>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_1})` }}
                >
                  <span className="price">Eravikulam National Park</span>
                </a>
                <div className="text p-4">
					{/* <span className="days">8 Days Tour</span> */}
					<h3><a href="#">Munnar, Kerala</a></h3>
					<p className="location"><span className="fa fa-map-marker"></span> Kerala, India</p>
				</div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_2})` }}
                >
                  <span className="price">Kodai Lake</span>
                </a>
                <div className="text p-4">
                  {/* <span className="days">10 Days Tour</span> */}
                  <h3><a href="#">Kodaikanal, Tamil Nadu</a></h3>
        			<p className="location"><span className="fa fa-map-marker"></span> Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_3})` }}
                >
                  <span className="price">Shore Temple</span>
                </a>
                <div className="text p-4">
                  {/* <span className="days">7 Days Tour</span> */}
                  <h3><a href="#">Mahabalipuram, Tamil Nadu</a></h3>
        			<p className="location"><span className="fa fa-map-marker"></span> Tamil Nadu, India</p>
                </div>
              </div>
            </div>

            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_4})` }}
                >
                  <span className="price">Meenakshi Temple</span>
                </a>
                <div className="text p-4">
                  {/* <span className="days">8 Days Tour</span> */}
                  <h3><a href="#">Madurai, Tamil Nadu</a></h3>
        			<p className="location"><span className="fa fa-map-marker"></span> Tamil Nadu, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_5})` }}
                >
                  <span className="price">Abbey Falls</span>
                </a>
                <div className="text p-4">
                  {/* <span className="days">10 Days Tour</span> */}
                  <h3><a href="#">Coorg, Karnataka</a></h3>
        			<p className="location"><span className="fa fa-map-marker"></span> Karnataka, India</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 ftco-animate fadeInUp ftco-animated">
              <div className="project-wrap">
                <a
                  href="#"
                  className="img"
                  style={{ backgroundImage: `url(${destination_6})` }}
                >
                  <span className="price">Om Beach</span>
                </a>
                <div className="text p-4">
                  {/* <span className="days">7 Days Tour</span> */}
        		<h3><a href="#">Gokarna, Karnataka</a></h3>
        		<p className="location"><span className="fa fa-map-marker"></span> Karnataka, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="ftco-section ftco-about img"
        style={{ backgroundImage: `url(${bg_4})` }}
      >
        <div className="overlay"></div>
        <div className="container py-md-5">
          <div className="row py-md-5">
            <div className="col-md d-flex align-items-center justify-content-center">
              <a
                href="https://vimeo.com/45830194"
                className="icon-video popup-vimeo d-flex align-items-center justify-content-center mb-4"
              >
                <span className="fa fa-play"></span>
              </a>
            </div>
          </div>
        </div>
      </section> */}

      <section  ref={aboutRef} id="about" className="ftco-section ftco-about ftco-no-pt img">
        <div className="container">
          <div className="row d-flex">
            <div className="col-md-12 about-intro">
              <div className="row">
                {/* <div className="col-md-6 d-flex align-items-stretch">
                  <div
                    className="img d-flex w-100 align-items-center justify-content-center"
                    style={{ backgroundImage: `url(${about_1})` }}
                  ></div>
                </div> */}
                <div className="col-md-12 pl-md-5 py-5">
                  <div className="row justify-content-start pb-3">
                    <div className="col-md-12 heading-section ftco-animate fadeInUp ftco-animated">
                      <span className="subheading">About Us</span>
                      <h2 className="mb-4">
                        Make Your Tour Memorable and Safe With Us
                      </h2>
                      <p>
					  At Karthik Cabs, we are dedicated to creating unforgettable travel experiences, ensuring comfort, safety, and adventure at every step. Whether you're exploring serene landscapes, vibrant cultures, or hidden gems, we curate personalized tours that cater to your preferences.
                      </p>
					  <p>
					  With expert guides, seamless planning, and a commitment to excellence, we bring your travel dreams to life. Let us take you on a journey beyond destinations—where every moment becomes a cherished memory.
					  </p>
                      {/* <p>
                        <a href="#" className="btn btn-primary">
                          Book Your Destination
                        </a>
                      </p> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
        className="ftco-section testimony-section bg-bottom"
        style={{ backgroundImage: `url(${bg_1})` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-7 text-center heading-section heading-section-white ftco-animate">
              <span className="subheading">Testimonial</span>
              <h2 className="mb-4">Tourist Feedback</h2>
            </div>
          </div>
          <div className="row ftco-animate">
            <div className="col-md-12">
              <div className="carousel-testimony owl-carousel">
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${person_1})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${person_2})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${person_3})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${person_1})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="item">
                  <div className="testimony-wrap py-4">
                    <div className="text">
                      <p className="star">
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                        <span className="fa fa-star"></span>
                      </p>
                      <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                      </p>
                      <div className="d-flex align-items-center">
                        <div
                          className="user-img"
                          style={{ backgroundImage: `url(${person_2})` }}
                        ></div>
                        <div className="pl-3">
                          <p className="name">Roger Scott</p>
                          <span className="position">Marketing Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ftco-section">
        <div className="container">
          <div className="row justify-content-center pb-4">
            <div className="col-md-12 heading-section text-center ftco-animate">
              <span className="subheading">Our Blog</span>
              <h2 className="mb-4">Recent Post</h2>
            </div>
          </div>
          <div className="row d-flex">
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{
                    backgroundImage: `url${image_1}`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Most Popular Place In This World</a>
                  </h3>

                  <p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry justify-content-end">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${image_2})` }}
                ></a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Most Popular Place In This World</a>
                  </h3>

                  <p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 d-flex ftco-animate">
              <div className="blog-entry">
                <a
                  href="blog-single.html"
                  className="block-20"
                  style={{ backgroundImage: `url(${image_3})` }}
                ></a>
                <div className="text">
                  <div className="d-flex align-items-center mb-4 topp">
                    <div className="one">
                      <span className="day">11</span>
                    </div>
                    <div className="two">
                      <span className="yr">2020</span>
                      <span className="mos">September</span>
                    </div>
                  </div>
                  <h3 className="heading">
                    <a href="#">Most Popular Place In This World</a>
                  </h3>

                  <p>
                    <a href="#" className="btn btn-primary">
                      Read more
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <section className="ftco-intro ftco-section ftco-no-pt">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <div className="img" style={{ backgroundImage: `url${bg_2}` }}>
                <div className="overlay"></div>
                <h2>We Are Pacific A Travel Agency</h2>
                <p>
                  We can manage your dream building A small river named Duden
                  flows by their place
                </p>
                <p className="mb-0">
                  <a href="#" className="btn btn-primary px-4 py-3">
                    Ask For A Quote
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

<footer className="ftco-footer bg-bottom ftco-no-pt" style={{backgroundImage: `url(${bg_3})`}}>
			<div className="container">
				<div className="row mb-5">
					<div className="col-md pt-5">
					<div className="ftco-footer-widget pt-md-5 mb-4">
					<h2 className="ftco-heading-2">About Us</h2>
					<p><strong>Karthik Cabs – Travel Made Easy</strong></p>
					<p>We provide reliable car rentals across South India, ensuring a smooth and hassle-free experience for every traveler.</p>
					
					<p><strong>Follow Us</strong></p>
					<ul className="ftco-footer-social list-unstyled float-md-left float-lft">
						<li className="ftco-animate fadeInUp ftco-animated">
						<a ><span className="fa fa-twitter"></span></a>
						</li>
						<li className="ftco-animate fadeInUp ftco-animated">
						<a ><span className="fa fa-facebook"></span></a>
						</li>
						<li className="ftco-animate fadeInUp ftco-animated">
						<a ><span className="fa fa-instagram"></span></a>
						</li>
					</ul>
					</div>
					</div>
					<div className="col-md pt-5 border-left">
						<div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
							<h2 className="ftco-heading-2">Infromation</h2>
							<ul className="list-unstyled">
								{/* <li><a  className="py-2 d-block">Online Enquiry</a></li> */}
								<li><a  className="py-2 d-block">General Enquiries</a></li>
								{/* <li><a  className="py-2 d-block">Booking Conditions</a></li> */}
								<li><a  className="py-2 d-block">Privacy and Policy</a></li>
								<li><a  className="py-2 d-block">Refund Policy</a></li>
								<li><a  className="py-2 d-block">Call Us</a></li>
							</ul>
						</div>
					</div>
					{/* <div className="col-md pt-5 border-left">
						<div className="ftco-footer-widget pt-md-5 mb-4">
							<h2 className="ftco-heading-2">Experience</h2>
							<ul className="list-unstyled">
								<li><a href="#" className="py-2 d-block">Adventure</a></li>
								<li><a href="#" className="py-2 d-block">Hotel and Restaurant</a></li>
								<li><a href="#" className="py-2 d-block">Beach</a></li>
								<li><a href="#" className="py-2 d-block">Nature</a></li> */}
								{/* <li><a href="#" className="py-2 d-block">Camping</a></li> */}
								{/* <li><a href="#" className="py-2 d-block">Party</a></li> */}
							{/* </ul>
						</div>
					</div> */}
					<div className="col-md pt-5 border-left">
						<div className="ftco-footer-widget pt-md-5 mb-4">
							<h2 className="ftco-heading-2">Have a Questions?</h2>
							<div className="block-23 mb-3">
								<ul>
									<li><span className="icon fa fa-map-marker"></span><span className="text">100/200 Subbiya Layout, Ramanathapuram, Coimbatore - 641045</span></li>
									<li><a ><span className="icon fa fa-phone"></span><span className="text">+91 9791532539</span></a></li>
									<li><a ><span className="icon fa fa-paper-plane">{" "}</span><span className="text"> karthik.cabs.travels@gmail.com</span></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 text-center">

						<p>
							Copyright &copy;{new Date().getFullYear()} All rights reserved 
							</p>
						</div>
					</div>
				</div>
			</footer>
			
			
			{isLoading && (
      <div id="ftco-loader" className="show fullscreen">
        <svg className="circular" width="48px" height="48px">
          <circle
            className="path-bg"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            stroke="#eeeeee"
          />
          <circle
            className="path"
            cx="24"
            cy="24"
            r="22"
            fill="none"
            strokeWidth="4"
            strokeMiterlimit="10"
            stroke="#F96D00"
          />
        </svg>
      </div>
    )}
    </div>
  );
};

export default Home;
