import React from 'react';
import Contactimg from '../../public/images/illustrations/icon_6.svg';

export default function Sectioncontact() {
  return (
    <div>
          <section className="section-contact" data-aos="fade-up">
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 scale">
                          <div className="flex-column">
                              <div className="contact-text">
                                  <h1>Let's scale your <br /> brand, together</h1>
                                  <p>Get a <a href="mailto:hello@lilosocial.com">hello@lilosocial.com</a></p>
                              </div>

                              <div className="contact-image block-990">
                                  <img src={Contactimg.src} alt="image" />
                              </div>
                          </div>
                      </div>


                      <div className="col-md-6 formdiv">
                          <form action="#" id="contact-form" name="contact">
                              <div className="form-group">
                                  <label for="name">Name <span>*</span></label>
                                  <input type="text" name="name" id="name" placeholder="Type Name" required />
                              </div>

                              <div className="form-group">
                                  <label for="company">Company Name <span>*</span></label>
                                  <input type="text" name="company" id="company" placeholder="Type Company Name" required />
                              </div>

                              <div className="form-group">
                                  <label for="phone">Phone</label>
                                  <input type="number" name="phone" id="phone" placeholder="Type Phone Number" />
                              </div>

                              <div className="form-group">
                                  <label for="email">Email Address <span>*</span></label>
                                  <input type="email" name="email" id="email" placeholder="Type Email Address" required />
                              </div>

                              <div className="form-group">
                                  <label for="help">How can we help? <span>*</span></label>
                                  <textarea name="help" id="help" placeholder="A brief description here" required></textarea>
                              </div>

                              <div className="form-group">
                                  <label for="services">Services <span>*</span></label>

                                  <div className="row mt-2">
                                      <div className="col-md-6 col-sm-12">
                                          <label for="cbx-1" className="label-cbx">
                                              <input id="cbx-1" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Creative</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label for="cbx-2" className="label-cbx">
                                              <input id="cbx-2" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Web Design & CRO</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label for="cbx-3" className="label-cbx">
                                              <input id="cbx-3" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Paid Media</p>
                                          </label>
                                      </div>

                                      <div className="col-md-6 col-sm-12">
                                          <label for="cbx-4" className="label-cbx">
                                              <input id="cbx-4" type="checkbox" className="invisible" />
                                                  <div className="checkbox">
                                                      <svg width="20px" height="20px" viewBox="0 0 20 20">
                                                          <path
                                                              d="M3,1 L17,1 L17,1 C18.1045695,1 19,1.8954305 19,3 L19,17 L19,17 C19,18.1045695 18.1045695,19 17,19 L3,19 L3,19 C1.8954305,19 1,18.1045695 1,17 L1,3 L1,3 C1,1.8954305 1.8954305,1 3,1 Z">
                                                          </path>
                                                          <polyline points="4 11 8 15 16 6"></polyline>
                                                      </svg>
                                                  </div>
                                                  <p>Email & SMS</p>
                                          </label>
                                      </div>
                                  </div>

                              </div>

                              <input type="submit" value="Send message" id="contactsubmit" className="btn primary-btn" />


                          </form>
                      </div>

                      <div className="col-md-6 subdiv">
                          <div className="submessage">
                              <h3 className="text-center">Thanks for contacting us! We will get in touch with you shortly.</h3>
                          </div>
                      </div>

                      <div className="contact-image none-990">
                          <img src={Contactimg.src} alt="image" />
                      </div>
                  </div>
              </div>
          </section>
    </div>
  )
}
