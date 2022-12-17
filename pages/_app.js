import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import Script from 'next/script';
import $ from 'jquery';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

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

      let add_class_on_scroll = () => nav.classList.add("sticky_h");
      let remove_class_on_scroll = () => nav.classList.remove("sticky_h");

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
            .animate( {
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
    <>
      

      <Component {...pageProps} />

      {/* <Script src="/js/main05dd.js" strategy='worker'
        onLoad={() => {
          console.log('Script has loaded')
        }} />
      <Script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" strategy='worker'
        onLoad={() => {
          console.log('Jquery has loaded')
        }} /> */}
  
    </>
  
  )
}

export default MyApp