import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../public/images/hero-logo.svg';
import styles from '../../styles/Lilo.module.css';

import $ from 'jquery'
// import '../../public/js/main05dd.js';
// import 'https://code.jquery.com/jquery-3.2.1.slim.min.js'

export default function Header() {
    
        
  return (
    <div>
          {/* className={scroll ? "bg-black" : "bg-white"} */}
          <header className={styles.head_1} id="head">
              <div className={styles.inner}>
                  <div className={styles.logo}>
                      <a href="index.html">
                          <img src={Logo.src} alt="logo" />
                      </a>
                  </div>
                  {/* <div className={styles.no_overflow}>
                   
                  </div> */}
                  <nav className={[styles.nav, styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                      <div className={[styles['menu-header-menu-container']].join(' ')}>
                          <ul id="menu-header-menu" className={styles.menu}>
                              <li className={[styles['menu-item'], styles['menu-item-object-page']].join(' ')}>
                                <Link href="#">Services</Link></li>
                              <li className={[styles['menu-item'], styles['menu-item-object-page']].join(' ')}><a
                                  href="about.html">About</a></li>
                              <li className={[styles['menu-item'], styles['menu-item-object-page']].join(' ')}><a
                                  href="careers.html">Careers</a></li>
                              <li className={[styles['menu-item'], styles['menu-item-object-page']].join(' ')}><a
                                  href="contact.html" className="btn btn-outline mt-3">Get in touch</a></li>
                          </ul>
                      </div>
                  </nav>
                  <div className={styles.hamburger}>
                      <div className={styles.hamburger_inner}>
                          <span className={styles.hamburger_inner_text}>Open
                              menu</span>
                      </div>
                  </div>
              </div>
          </header>

    </div>
  )
}
