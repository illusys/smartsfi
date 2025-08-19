import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { logoSlider } from "../src/sliderProps";
const Contact = () => {
  return (
    <Layout>
      <PageBanner pageName={"Contact Us"} />
      <section className="contact-information-one p-r z-1 pt-215 pb-130">
        <div className="information-img_one wow fadeInRight">
          <img src="assets/images/contact/img-1.jpg" alt="Imaged" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-9 col-lg-12">
              <div className="contact-two_information-box">
                <div className="section-title section-title-left mb-50 wow fadeInUp">
                  <span className="sub-title">Get In Touch</span>
                  <h4>
                  We’re Ready to Support Your Farming Journey
                  </h4>
                </div>
                <div className="row">
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two info-one mb-30 wow fadeInDown">
                      <div className="icon">
                        <i className="far fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <h5>📍 Our Office Location</h5>
                        <p>Suite 316 (3rd Floor)
King's Plaza, Plot 307, Ahmadu Bello Way
Opp. NAF Conference Centre, Kado, Abuja – Nigeria
</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two mb-30 info-two wow fadeInUp">
                      <div className="icon">
                        <i className="far fa-envelope-open-text" />
                      </div>
                      <div className="info">
                        <h5>Email Address</h5>
                        <p>
                          <a href="mailto:info@smartsfi.com">
                            info@smartsfi.com
                          </a>
                        </p>
                        <p>
                          <a href="mailto:www.smartsfi.com">www.smartsfi.com</a>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12">
                    <div className="information-item-two mb-30 info-three wow fadeInDown">
                      <div className="icon">
                        <i className="far fa-phone" />
                      </div>
                      <div className="info">
                        <h5>Phone Number</h5>
                        <p>
                          <a href="tel:+2347068814528">+234 706 8814 528</a>
                          <a href="tel:+2347016241281"> +234 701 6241 281</a>
                         
                        </p>
                      
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-8">
                    <p>
                    Whether you need expert consultation, 
                    sustainable farming training, agri-tech solutions, 
                    or access to organic produce, our team is here to help.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Information section ======*/}
      {/*====== Start Map section ======*/}
      <section className="contact-page-map">
        <div className="map-box">
        <iframe src="https://maps.google.com/maps?q=307%20Ahmadu%20Bello%20Wy,%20Kado,%20Abuja%2023409,%20Federal%20Capital%20Territory&t=&z=15&ie=UTF8&iwloc=&output=embed"></iframe>

          
          
        </div>
      </section>
      {/*====== End Map section ======*/}
      {/*====== Start Contact Section ======*/}
      <section className="contact-three pb-70 wow fadeInUp">
        <div className="container">
          <div className="row justify-content-end">
            <div className="col-xl-7 col-lg-10">
              <div className="contact-three_content-box">
                <div className="section-title section-title-left mb-60">
                  <span className="sub-title">Get In Touch</span>
                  <h2>Need Oragnic Foods! Send Us Message</h2>
                </div>
                <div className="contact-form">
                  <form onSubmit={(e) => e.preventDefault()}>
                    <div className="form_group">
                      <input
                        type="text"
                        className="form_control"
                        placeholder="Full Name"
                        name="name"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <input
                        type="email"
                        className="form_control"
                        placeholder="Email Address"
                        name="email"
                        required=""
                      />
                    </div>
                    <div className="form_group">
                      <textarea
                        className="form_control"
                        placeholder="Write Message"
                        name="message"
                        defaultValue={""}
                      />
                    </div>
                    <div className="form_group">
                      <button className="main-btn btn-yellow">
                        Send Us Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Contact Section ======*/}
      {/*====== Start Partner Section ======*/}
      <section className="partners-one p-r z-1 pt-50 pb-130">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="section-title text-center mb-30 wow fadeInUp">
                <h4>We Have More Then 1235+ Global Partners</h4>
              </div>
            </div>
          </div>
          <Slider {...logoSlider} className="partner-slider-one wow fadeInDown">
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-7.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-8.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-9.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-10.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-11.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-12.png"
                  alt="partner image"
                />
              </div>
            </div>
            <div className="partner-item-two">
              <div className="partner-img">
                <img
                  src="assets/images/partner/img-10.png"
                  alt="partner image"
                />
              </div>
            </div>
          </Slider>
        </div>
      </section>
    </Layout>
  );
};
export default Contact;
