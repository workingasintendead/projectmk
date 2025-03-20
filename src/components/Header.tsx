import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header: React.FC = () => {
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
                <Link className="nav-link" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/portfolio">
                  Portfolio
                </Link>
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
                    <Link className="dropdown-item" href="/services/design">
                      Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/services/construction"
                    >
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      href="/services/maintenance"
                    >
                      Maintenance
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" href="/contact">
                  Contact
                </Link>
              </li>
              <a
                href="tel:+1234567890"
                className="d-flex align-items-center"
                style={{
                  color: '#007bff',
                  textDecoration: 'none',
                }}
              >
                <span
                  className="material-icons me-2"
                  style={{ fontSize: '20px', marginRight: '0px' }}
                >
                  phone_iphone
                </span>
                +1234567890
              </a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
