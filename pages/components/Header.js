import React from 'react';
import '../../styles/Lilo.module.css'

export default function Header() {
  return (
    <div>
          <header className="head_1">
              <div className="inner">
                  <div className="logo">
                      <a href="index.html">
                          <img src="../../public/assets/images/hero-logo.svg" alt="logo" />
                      </a>
                  </div>
                  <nav className="nav fi-03 fi-03-v05">
                      <div className="menu-header-menu-container">
                          <ul id="menu-header-menu" className="menu">
                              <li className="menu-item menu-item-object-page"><a
                                  href="services.html">Services</a></li>
                              <li className="menu-item menu-item-object-page"><a
                                  href="about.html">About</a></li>
                              <li className="menu-item menu-item-object-page"><a
                                  href="careers.html">Careers</a></li>
                              <li className="menu-item menu-item-object-page"><a
                                  href="contact.html" className="btn btn-outline mt-3">Get in touch</a></li>
                          </ul>
                      </div>
                  </nav>
                  <div className="hamburger">
                      <div className="hamburger_inner">
                          <span className="hamburger_inner_text">Open
                              menu</span>
                      </div>
                  </div>
              </div>
          </header>

    </div>
  )
}
