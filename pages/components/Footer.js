import React from 'react';
import styles from '../../styles/Footer.module.css';
import Logo from '../../public/images/hero-logo.svg';


export default function Footer() {
  return (
    <div>
          <footer className={styles.foot_1}>
              <div className={styles.inner}>
                  <div className={styles.top}>
                      <div className={styles.left}>
                          <div className={styles.logo}>
                              <a href="index.html">
                                  <img src={Logo.src} alt="logo" />
                              </a>
                          </div>
                          <div className={[styles.contact_info, styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                              <div className={styles.c_i_1}><a href="https://goo.gl/maps/M5WgSDvGjK6EeBQN6" target="_blank">175 Pearl St.
                                  Floors 1-3 <br />Brooklyn NY 11201</a></div>
                              <div className={styles.c_i_2}><a href="tel:3476193312">(347) 619-3312</a><br /><a
                                  href="mailto:hello@lilosocial.com">hello@lilosocial.com</a></div>
                          </div>
                      </div>
                      <div className={styles.right}>
                          <div className={styles.menus}>
                              <div className={[styles.menu_1, styles.menu]}>
                                  <div className={[styles.heading, styles['fi-03'], styles['fi-03-v04']].join(' ')}>
                                    <h4>Info</h4>
                                    <span className={styles.plus_minus_2_wrapper}>
                                        <span className={styles.plus_minus_2}></span></span>
                                  </div>
                                  <ul className={[styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                                      <li><a href="index.html">Home</a></li>
                                      <li><a href="services.html">Services</a></li>
                                      <li><a href="about.html">About</a></li>
                                      <li><a href="careers.html">Careers</a></li>
                                      <li><a href="contact.html">Contact</a></li>
                                  </ul>
                              </div>
                              <div className={[styles.menu_2, styles.menu].join(' ')}>
                                  <div className={[styles.heading, styles['fi-03'], styles['fi-03-v04']].join(' ')}>
                                      <h4>Resources</h4>
                                      <span className={styles.plus_minus_2_wrapper}>
                                          <span className={styles.plus_minus_2}></span></span>
                                  </div>
                                  <ul className={[styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                                      <li><a href="roas-calculator.html">Calculator</a></li>
                                  </ul>
                              </div>
                              <div className={[styles.menu_3, styles.menu].join(' ')}>
                                  <div className={[styles.heading, styles['fi-03'], styles['fi-03-v04']].join(' ')}>
                                    <h4>Follow Us</h4>
                                      <span className={styles.plus_minus_2_wrapper}><span
                                          className={styles.plus_minus_2}></span></span>
                                  </div>
                                  <ul className={[styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                                      <li><a href="#" target="_blank">Linkedin</a></li>
                                      <li><a href="#" target="_blank">Dribbble</a></li>
                                  </ul>
                              </div>
                          </div>
                          <div className={[styles.newsletter_wrapper, styles.dotbg].join(' ')}>
                              <div className={styles.b12}>
                                  <div className={styles.img_bg}>
                                  </div>
                                  <div className={styles.content_wrapper}>
                                      <div className={[styles.heading, styles['fi-03'], styles['fi-03-v04']].join(' ')}><h4>Newsletter</h4></div>
                                      <div className={[styles.content, styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                                          <p>Subscribe for the latest Lilo Social news &amp; case studies</p>
                                      </div>
                                      <div className={[styles.b_form, styles.b_form_mailchimp].join(' ')}>
                                          {/* <!-- Begin Mailchimp Signup Form --> */}
                                          <div id="mc_embed_signup">
                                              <form action="#" id="newsletter-form">
                                                  <div id="mc_embed_signup_scroll">
                                                      <div className={[styles.form_i_b, styles['mc-field-group']].join(' ')}>
                                                          <input type="email" value="" name="EMAIL" className={[styles.required, styles.email].join(' ')}
                                                              id="mce-EMAIL" placeholder="Type email address" />
                                                      </div>
                                                      {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
                                                      <div style={{position: 'absolute', left: '-5000px'}} aria-hidden="true">
                                                          <input type="text" tabIndex="-1" value="" />
                                                      </div>
                                                      <p className={styles.hidden}>Thank you for subscribing</p>
                                                      <div className={styles.clear}>
                                                        <input type="submit" value="Subscribe" name="subscribe"
                                                          id="mc-embedded-subscribe" className={[styles.btn, styles['fi-01'], styles['fi-01-v02'], styles['btn-outline'], styles['mt-4'], styles['d-inline-block']].join(' ')} />
                                                      </div>
                                                  </div>
                                              </form>
                                          </div>
                                          {/* <!--End mc_embed_signup--> */}
                                      </div>
                                  </div>
                              </div>

                              <div className={styles.dotimg}></div>
                          </div>
                          <div className={[styles.contact_info, styles['fi-03'], styles['fi-03-v05']].join(' ')}>
                              <div className={styles.c_i_1}><a href="#" target="_blank">175 Pearl St.
                                  Floors 1-3 <br />Brooklyn NY 11201</a></div>
                              <div className={styles.c_i_2}><a href="#">(347) 619-3312</a><br /><a
                                  href="#">hello@lilosocial.com</a></div>
                          </div>
                      </div>
                  </div>
                  <div className={styles.bottom}>
                      <div className={['left-copy']}>© Lilo Social 2022 | <a href="privacy.html">Privacy Policy</a> | <a
                          href="t&c.html">Terms & Conditions</a></div>
                      <div className={styles.right}> &nbsp;
                      </div>
                  </div>
              </div>
          </footer>
    </div>
  )
}
