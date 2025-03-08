import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [awake, setAwake] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;

      if (scrollTop > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      if (scrollTop > 350) {
        setAwake(true);
      } else {
        setAwake(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [selected, setselected] = useState('home');
  useEffect(()=>{
    console.log(window.location,' ++++ ');
    if (window.location.pathname === '/') {
      setselected('home');
    }
    if (window.location.pathname === '/about') {
      setselected('about');
    }
    if (window.location.pathname === '/destination') {
      setselected('destination');
    }
    if (window.location.pathname === '/contact') {
      setselected('contact');
    }
  },[window.location.pathname])
  // const onClick = (e) => {
  //   setselected(e.target.id);
  // }
  return (
    <nav
    className={`navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light 
    ${scrolled ? "scrolled" : ""} ${awake ? "awake" : "sleep"}`}
    id="ftco-navbar"
  >
      <div className="container">
        {/* Logo */}
        <Link to="/" className="navbar-brand">
          Karthik Cabs <span className="text-blue-400">Travel Agency</span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation"
        >
          <span className="oi oi-menu"></span> Menu
        </button>

        {/* Navigation Links */}
        <div
          className="collapse navbar-collapse" id="ftco-nav"
        >
          <ul className="navbar-nav ml-auto">
            <li className={`nav-item ${selected === 'home' ? 'active' : ''}`}><Link to="/" className="nav-link">Home</Link></li>
            <li className="nav-item "><Link to="#" className="nav-link">About</Link></li>
            <li className="nav-item "><Link to="#" className="nav-link">Destination</Link></li>
            <li className="nav-item "><Link to="#" className="nav-link">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
