import Link from "next/link";
import Slider from "react-slick";
import { Nav, Tab } from "react-bootstrap";
import OrgariumCounter from "../src/components/OrgariumCounter";
import PageBanner from "../src/components/PageBanner";
import ProgressBar from "../src/components/ProgressBar";
import Layout from "../src/layouts/Layout";
import { logoSlider, testimonialSliderOne } from "../src/sliderProps";
const About = () => {
  return (
    <Layout>
      <PageBanner pageName={"About Us"} />
      <section className="about-section p-r z-1 pt-170 pb-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-content-box content-box-gap mb-50">
                <div className="section-title section-title-left wow fadeInUp mb-30">
                  <span className="sub-title">About Us</span>
                  <h2>Smart Sustainable Farming Initiatives (SSFI)</h2>
                </div>
                <p>
                Smart Sustainable Farming Initiatives (SSFI) is an agricultural consulting and training organization founded in 2023.
                Its mission is to promote sustainable, technology-driven farming across Nigeria and beyond by blending traditional agricultural wisdom with modern innovations. 
                The organization collaborates with farmers, agribusinesses, educational institutions, 
                and government agencies to tackle critical agricultural challenges like food security, climate adaptation, and ecological health.
                </p>
                <div className="choose-item-list wow fadeInDown">
                <Tab.Container defaultActiveKey={"mission"}>
                  <div className="tab-content-box wow fadeInUp">
                    <Nav as={"ul"} className="nav nav-tabs mb-20">
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="mission"
                          href="#mission"
                        >
                          Our Mission
                        </Nav.Link>
                      </li>
                      <li className="nav-item">
                        <Nav.Link
                          as={"a"}
                          className="nav-link"
                          data-toggle="tab"
                          eventKey="vision"
                          href="#vision"
                        >
                          Core Values
                        </Nav.Link>
                      </li>
                    </Nav>
                    <Tab.Content className="tab-content">
                      <Tab.Pane className="tab-pane fade" eventKey="mission">
                        <div className="content-box-gap">
                          <p>
                          Our mission is to empower communities by providing the knowledge, tools, 
                          and support necessary to implement sustainable agriculture practices that improve productivity, 
                          profitability, and ecological health. From soil analysis and precision farming to supply chain optimization 
                          and climate-smart agriculture, we equip our clients with the skills and resources needed to meet today’s agricultural challenges while preparing for the future.
                          </p>
                         
                        </div>
                      </Tab.Pane>
                      <Tab.Pane className="tab-pane fade" eventKey="vision">
                        <div className="content-box-gap">
                          
                        <h6> Sustainability:</h6>
                         <p> Sustainability is at the heart of everything we do. 
                          We are committed to promoting farming practices that protect the environment and ensure long-term agricultural success.</p>

                          <h6>  Innovation:</h6>
                          <p> Our innovative approach ensures that our clients are equipped with cutting-edge tools and strategies to thrive in a rapidly changing world.</p>

                          <h6>  Integrity:</h6>
                          <p>Integrity is the foundation of our relationships with clients, partners, and stakeholders. We conduct our business with honesty, transparency, 
                          and ethical responsibility, ensuring that our actions align with our words. At SSFI, we believe that trust is earned through consistent, r
                          eliable service and a steadfast commitment to doing what is right.</p>

                         
                        
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
                </div>
                <div className="about-button wow fadeInUp">
                  <Link legacyBehavior href="/services">
                    <a className="main-btn btn-yellow">Our Services</a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-four_image-box text-right p-r mb-50 wow fadeInRight">
                <img
                  src="assets/images/about/4.jpg"
                  className="about-img_one"
                  alt=""
                />
                <img
                  src="assets/images/about/5.jpg"
                  className="about-img_two"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      
     
     
      {/*====== Start Counter Section ======*/}
      <section className="fun-fact-one pt-30 pb-130">
        <div className="big-text mb-75 wow fadeInUp">
          <h2>Statistics</h2>
        </div>
        <div className="container">
          <div className="counter-wrap-one wow fadeInDown">
            <div className="counter-inner-box">
              <OrgariumCounter />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default About;
