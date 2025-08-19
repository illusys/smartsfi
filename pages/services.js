import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import { logoSlider, projectsSliderTwo } from "../src/sliderProps";
const Services = () => {
  return (
    <Layout>
      <PageBanner pageName={"Services"} />
      <section className="service-section pt-170 pb-80">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="section-title section-title-left mb-50 wow fadeInLeft">
                <span className="sub-title">Our Services</span>
                <h2>What We Offer for Smarter, Sustainable Farming</h2>
              </div>
            </div>
            <div className="col-lg-6 mb-50">
              <p className="wow fadeInRight">
              At SSFI, we blend agricultural expertise with technology to deliver results-driven services. 
              From farmer training and consulting to precision tools and market access, every solution is designed to support productivity,
               environmental responsibility, and food security across Nigeria and beyond. Whether you're a farmer, educator, agribusiness, or policymaker — 
               we help you grow with purpose and innovation.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-wheat-sack" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Consulting Services</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-grape" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Technology Integration</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-cow" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Training & Education</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-fish" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Farm Management</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInUp">
                <div className="icon">
                  <i className="flaticon-healthy-food" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Market Access & Support</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
            <div className="col-xl-2 col-lg-4 col-md-4 col-sm-12">
              <div className="service-box text-center mb-70 wow fadeInDown">
                <div className="icon">
                  <i className="flaticon-planet-earth" />
                </div>
                <div className="text">
                  <h3 className="title">
                    <Link legacyBehavior href="#">
                      <a>Supply Chain Services</a>
                    </Link>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
      {/*====== Start Skill Section ======*/}
      <section className="skill-section-two pt-lg-130">
        <div className="container-fluid">
          <div
            className="skill-wrapper-one pb-90 bg_cover"
            style={{ backgroundImage: "url(assets/images/bg/skill-bg-2.jpg)" }}
          >
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="skill-two_content-box content-box-gap mb-40 wow fadeInUp">
                    <div className="section-title section-title-left mb-30">
                      <span className="sub-title">Educational Programs</span>
                      <h2>SSFI offers training for:</h2>
                    </div>
                   
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                        Farmers<span>75%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "75%" }}
                      />
                      <div className="progress" />
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                        Students<span>89%</span>
                        </h5>
                      </div>
                      <div className="progress" />
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                        Agribusiness professionals<span>89%</span>
                        </h5>
                      </div>
                      <div className="progress" />
                    </div>
                    <div className="skill-bar">
                      <div className="skill-title">
                        <h5>
                        Policymakers<span>89%</span>
                        </h5>
                      </div>
                      <div
                        className="progress-bar wow slideInLeft"
                        style={{ width: "89%" }}
                      />
                      <div className="progress" />
                    </div>
                    <p>
                    Each course is structured for flexibility, 
                    from one-day workshops to multi-week programs, 
                    and is delivered through blended learning (lectures, workshops, and field visits).
                    </p>
                    <div className="skill-button">
                      <Link legacyBehavior href="/about">
                        <a className="main-btn bordered-btn">Learn More Us</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Skill Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="popular-service pt-130 pb-80">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-8 col-lg-10">
              <div className="section-title text-center mb-50 wow fadeInDown">
                <span className="sub-title">Key Courses:</span>
               
              </div>
            </div>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-4">
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-1.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Sustainable Farming Practices</a>
                    </Link>
                  </h3>
                  <p>Learn how to apply eco-friendly techniques like crop rotation, 
                    soil health, and climate-smart agriculture for long-term farm productivity.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-2.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Precision Agriculture for Sustainable Development</a>
                    </Link>
                  </h3>
                  <p>Discover how to leverage drones, IoT, and data analytics to boost yields, cut waste, and farm more efficiently.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-3.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Integrated Pest Management (IPM)</a>
                    </Link>
                  </h3>
                  <p>Master sustainable pest control through biological, mechanical, and low-chemical approaches that protect both crops and the environment.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="img-holder mb-50 wow fadeInDown">
                <img
                  src="assets/images/service/img-1.jpg"
                  alt="Service Image"
                />
              </div>
            </div>
            <div className="col-lg-4">
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-4.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Written Exams</a>
                    </Link>
                  </h3>
                  <p>Test your understanding of core concepts in sustainable and tech-driven agriculture.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInUp">
                <div className="icon">
                  <img src="assets/images/icon/icon-5.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Practical Evaluations</a>
                    </Link>
                  </h3>
                  <p>Demonstrate hands-on skills like soil testing, pest control, or tech tool use on the field.</p>
                </div>
              </div>
              <div className="single-service-item mb-50 card-rtl wow fadeInDown">
                <div className="icon">
                  <img src="assets/images/icon/icon-6.png" alt="Icon" />
                </div>
                <div className="text">
                  <h3>
                    <Link legacyBehavior href="/service-details">
                      <a>Group Projects</a>
                    </Link>
                  </h3>
                  <p>Collaborate on real-world farm challenges to build teamwork and problem-solving skills.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Service Section ======*/}
     
     {/*====== Start Portfolio Section ======*/}
<section className="projects-section pt-130">
  <div className="container-fluid">
    <div className="row justify-content-center">
      <div className="col-xl-6 col-lg-10">
        <div className="section-title text-center mb-60">
          <span className="sub-title">Collaborations</span>
          <h2>We’ve collaborated with IBBUL</h2>
        </div>
      </div>
    </div>

    <Slider {...projectsSliderTwo} className="projects-slider-two">
      <div className="project-item-two wow fadeInUp">
        <div className="img-holder">
          <img src="assets/images/portfolio/img-25.jpg" alt="SSFI & IBBUL Collaboration" />
          <div className="hover-portfolio">
            <div className="hover-content">
              <Link legacyBehavior href="/portfolio-details">
                <a className="icon-btn">
                  <i className="far fa-arrow-right" />
                </a>
              </Link>
              <h3 className="title">
                <Link legacyBehavior href="/portfolio-details">
                  <a>Smart Agriculture Training at IBBUL</a>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  </div>
</section>
{/*====== End Portfolio Section ======*/}

      {/*====== Start Testimonial Section ======*/}
      <section className="testimonial-three pt-130 pb-130">
        <div className="container">
          <TestimonialSlider />
        </div>
      </section>
    </Layout>
  );
};
export default Services;
