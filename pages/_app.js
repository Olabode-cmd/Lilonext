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

      {/* <Script src="js/main05dd.js"
        onLoad={() => {
          console.log('Script has loaded')
        }} />
      <Script src="js/main6669.js" />
      <Script src="js/contact.js" /> */}
    </>
  
  )
}

export default MyApp