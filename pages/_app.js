import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import Script from 'next/script';
import $ from 'jquery';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {

  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  
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