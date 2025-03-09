import React, { useEffect, useState } from "react";
import bgImage from "../../assets/images/bg_5.jpg"; // Import image
import Navbar from "../../Components/Navbar/Navbar";

import bg_1 from "../../assets/images/bg_1.jpg";
import bg_3 from "../../assets/images/bg_3.jpg";
import ContactForm from "./ContactForm";
const ContactUs = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [height, setHeight] = useState(window.innerHeight);
  useEffect(() => {
    const updateHeight = () => setHeight(window.innerHeight);

    window.addEventListener("resize", updateHeight);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateHeight);
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust timing if needed
  }, []);
  return (
    <div>
      <Navbar />
      <section
        className="hero-wrap hero-wrap-2 js-fullheight"
        style={{ backgroundImage: `url(${bg_1})`, height: `${height}px` }}
      >
        <div className="overlay"></div>
        <div className="container">
          <div
            className="row no-gutters slider-text js-fullheight align-items-end justify-content-center"
            style={{ height: `${height}px` }}
          >
            <div className="col-md-9 ftco-animate pb-5 text-center fadeInUp ftco-animated">
              <p className="breadcrumbs">
                <span className="mr-2">
                  <a href="index.html">
                    Home <i className="fa fa-chevron-right"></i>
                  </a>
                </span>{" "}
                <span>
                  Contact us <i className="fa fa-chevron-right"></i>
                </span>
              </p>
              <h1 className="mb-0 bread">Contact us</h1>
            </div>
          </div>
        </div>
      </section>

      <section className="ftco-section ftco-no-pb contact-section mb-4">
        <div className="container">
          <div className="row d-flex contact-info">
            <div className="col-md-4 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-map-marker"></span>
                </div>
                <h3 className="mb-2">Address</h3>
                <p>
                  100/200 Subbiya Layout, Ramanathapuram, Coimbatore - 641045
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-phone"></span>
                </div>
                <h3 className="mb-2">Contact Number</h3>
                <p>
                  <a href="tel:+919791532539">+91 9791532539</a>
                </p>
              </div>
            </div>
            <div className="col-md-4 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-paper-plane"></span>
                </div>
                <h3 className="mb-2">Email Address</h3>
                <p>
                  <a href="mailto:karthik.cabs.travels@gmail.com">
                    karthik.cabs.travels@gmail.com
                  </a>
                </p>
              </div>
            </div>
            {/* <div className="col-md-3 d-flex">
              <div className="align-self-stretch box p-4 text-center">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fa fa-globe"></span>
                </div>
                <h3 className="mb-2">Website</h3>
                <p>
                  <a href="#">yoursite.com</a>
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      <ContactForm/>

      <footer
        className="ftco-footer bg-bottom ftco-no-pt"
        style={{ backgroundImage: `url(${bg_3})` }}
      >
        <div className="container">
          <div className="row mb-5">
            <div className="col-md pt-5">
              <div className="ftco-footer-widget pt-md-5 mb-4">
                <h2 className="ftco-heading-2">About Us</h2>
                <p>
                  <strong>Karthik Cabs – Travel Made Easy</strong>
                </p>
                <p>
                  We provide reliable car rentals across South India, ensuring a
                  smooth and hassle-free experience for every traveler.
                </p>

                <p>
                  <strong>Follow Us</strong>
                </p>
                <ul className="ftco-footer-social list-unstyled float-md-left float-lft">
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                      <span className="fa fa-twitter"></span>
                    </a>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                      <span className="fa fa-facebook"></span>
                    </a>
                  </li>
                  <li className="ftco-animate fadeInUp ftco-animated">
                    <a>
                      <span className="fa fa-instagram"></span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md pt-5 border-left">
              <div className="ftco-footer-widget pt-md-5 mb-4 ml-md-5">
                <h2 className="ftco-heading-2">Infromation</h2>
                <ul className="list-unstyled">
                  {/* <li><a  className="py-2 d-block">Online Enquiry</a></li> */}
                  <li>
                    <a className="py-2 d-block">General Enquiries</a>
                  </li>
                  {/* <li><a  className="py-2 d-block">Booking Conditions</a></li> */}
                  <li>
                    <a className="py-2 d-block">Privacy and Policy</a>
                  </li>
                  <li>
                    <a className="py-2 d-block">Refund Policy</a>
                  </li>
                  <li>
                    <a className="py-2 d-block">Call Us</a>
                  </li>
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
                    <li>
                      <span className="icon fa fa-map-marker"></span>
                      <span className="text">
                        100/200 Subbiya Layout, Ramanathapuram, Coimbatore -
                        641045
                      </span>
                    </li>
                    <li>
                      <a>
                        <span className="icon fa fa-phone"></span>
                        <span className="text">+91 9791532539</span>
                      </a>
                    </li>
                    <li>
                      <a>
                        <span className="icon fa fa-paper-plane"> </span>
                        <span className="text">
                          {" "}
                          karthik.cabs.travels@gmail.com
                        </span>
                      </a>
                    </li>
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

export default ContactUs;
