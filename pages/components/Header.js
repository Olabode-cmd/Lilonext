import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Logo from '../../public/images/hero-logo.svg';
import styles from '../../styles/Lilo.module.css';

import $ from 'jquery'
// import '../../public/js/main05dd.js';
// import 'https://code.jquery.com/jquery-3.2.1.slim.min.js'

export default function Header() {
    
    
    // const [scroll, setScroll] = useState(false)

    // useEffect(() => {
    //     window.addEventListener("scroll", () => {
    //         setScroll(window.scrollY > 1);
    //     });
    // }, []);

    useEffect(() => {
        window.addEventListener("load", function () {
            animatedEffect();
        });

        window.addEventListener("resize", function () { });

        window.addEventListener("scroll", function () {
            head_1_sticky();
            animatedEffect();
        });

        function register() {
            head_1_sticky();
            head_1_hamburger();
            footerMenuToggle();
        }
        register();

        function head_1_hamburger() {
            let hamb = document.querySelector(".hamburger");

            if (hamb == null) {
                return;
            }

            let body = document.querySelector("body");
            let html = document.querySelector("html");
            hamb.addEventListener("click", function () {
                body.classList.toggle("menu_opened");
                html.classList.toggle("no_overflow");

                // body.classList.toggle("Lilo_menu_opened__uiEVi")
                // html.classList.toggle("Lilo_no_overflow__2vk9H")
            });
        }

        function head_1_sticky() {
            let scrollpos = window.scrollY;
            let nav = document.querySelector("header");
            // let nav = document.getElementBy('head')

            let add_class_on_scroll = () => nav.classList.add("Lilo_sticky_h__UPyvl");
            let remove_class_on_scroll = () => nav.classList.remove("Lilo_sticky_h__UPyvl");

            scrollpos = window.scrollY;

            if (scrollpos >= 1) {
                add_class_on_scroll();
            } else {
                remove_class_on_scroll();
            }
        }


        function animatedEffect() {
            $(".animated").each(function (i, el) {
                var el = $(el);
                if (el.visible(true)) {
                    el.addClass("a_active");
                }
            });

            $(".count").each(function (i, el) {
                var el = $(el);
                if (el.visible(true) && !el.hasClass("c_active")) {
                    el.addClass("c_active");
                    $(this)
                        .prop("Counter", 0)
                        .animate(
                            {
                                Counter: $(this).text(),
                            },
                            {
                                duration: 2000,
                                easing: "swing",
                                step: function (now) {
                                    $(this).text(Math.ceil(now));
                                },
                            }
                        );
                }
            });
        }

        function footerMenuToggle() {
            let faqItems = document.querySelectorAll(".foot_1 .menus .menu .heading");
            if (faqItems == null) {
                return;
            }
            faqItems.forEach(function (userItem) {
                userItem.addEventListener("click", function () {
                    this.parentElement.classList.toggle("active");
                });
            });
        }

    })
        
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
