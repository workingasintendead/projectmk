import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light fixed-top"
        style={{
          zIndex: 10,
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(5px)',
        }}
      >
        <div className="container">
          <Link className="navbar-brand" href="/">
            <Image
              src="/edgewaterPHlogo.png"
              alt="Logo"
              width={100}
              height={100}
              style={{ objectFit: 'contain' }}
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Services
                </a>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdown"
                  style={{
                    background: 'rgb(212, 212, 212)',
                    backdropFilter: 'blur(5px)',
                  }}
                >
                  <li>
                    <a className="dropdown-item" href="#design">
                      Design
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#construction">
                      Construction
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#maintenance">
                      Maintenance
                    </a>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Hero;
