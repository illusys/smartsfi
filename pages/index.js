import Link from "next/link";
import Slider from "react-slick";
import { Nav, Tab } from "react-bootstrap";
import Counter from "../src/components/Counter";
import TestimonialSlider from "../src/components/sliders/TestimonialSlider";
import Layout from "../src/layouts/Layout";
import {
  heroSliderOne,
  logoSlider,
  projectsSliderTwo,
  serviceSliderOne,
} from "../src/sliderProps";
const Index3 = () => {
  return (
    <Layout header={3} footer={3}>
      <section className="hero-area-three">
        <Slider {...heroSliderOne} className="hero-slider-one">
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_three-slider-1.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              <img src="assets/images/icon/wheat.png" alt="" />
              <h3>SSFI</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Tech-Driven 
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                    Agricultural Transformation
                    </h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link legacyBehavior href="/services">
                        <a className="main-btn btn-white">Our Services</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_three-slider-2.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              <img src="assets/images/icon/wheat.png" alt="" />
              <h3>SSFI</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Hands-On 
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                    Capacity Building for a Greener Future
                    </h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link legacyBehavior href="/services">
                        <a className="main-btn btn-white">Our Services</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="single-slider p-r z-1">
            <div
              className="image-layer bg_cover"
              style={{
                backgroundImage:
                  "url(assets/images/hero/hero_three-slider-3.jpg)",
              }}
            />
            <div className="brand-card dark-black-bg">
              <img src="assets/images/icon/wheat.png" alt="" />
              <h3>SSFI</h3>
            </div>
            <div className="container">
              <div className="row">
                <div className="col-lg-6">
                  <div className="hero-content text-white">
                    <span
                      className="tag-line"
                      data-animation="fadeInDown"
                      data-delay=".4s"
                    >
                      Sustainability with 
                    </span>
                    <h2 data-animation="fadeInUp" data-delay=".5s">
                    Market Access and Ecosystem Support
                    </h2>
                    <div
                      className="hero-button"
                      data-animation="fadeInDown"
                      data-delay=".6s"
                    >
                      <Link legacyBehavior href="/about">
                        <a className="main-btn btn-yellow">Learn About Us</a>
                      </Link>
                      <Link legacyBehavior href="/services">
                        <a className="main-btn btn-white">Our Services</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </section>
      {/*====== End Hero Section ======*/}
      {/*====== Start Features Section ======*/}
      <section className="features-section border-bottom-1">
  <div className="container">
    <div className="row features-wrap-two wow fadeInUp">
      <div className="col-md-4 col-sm-12">
        <div className="features-item-two text-center mb-30">
          <div className="fill-number">01</div>
          <div className="icon">
            <i className="flaticon-tractor" />
          </div>
          <div className="text">
            <h5 className="feature-title">Sustainable Farming Practices</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="features-item-two text-center mb-30">
          <div className="fill-number">02</div>
          <div className="icon">
            <i className="flaticon-agriculture" />
          </div>
          <div className="text">
            <h5 className="feature-title">Precision Agriculture for Sustainable Development</h5>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12">
        <div className="features-item-two text-center mb-30">
          <div className="fill-number">03</div>
          <div className="icon">
            <i className="flaticon-social-care" />
          </div>
          <div className="text">
            <h5 className="feature-title">Integrated Pest Management (IPM)</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/*====== End Features Section ======*/}
      {/*====== Start About Section ======*/}
      <section className="about-section pt-130 pb-95">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="about-three-image_box p-r mb-40 wow fadeInLeft">
               
                <div className="row align-items-center">
                  <div className="col-md-5">
                    <img
                      src="assets/images/about/1.jpg"
                      className="about-img_one"
                      alt=""
                    />
                  </div>
                  <div className="col-md-7">
                    <img
                      src="assets/images/about/2.jpg"
                      className="about-img_two"
                      alt=""
                    />
                  </div>
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
                          <ul>
                          <li><b>Sustainability:</b>
                          Sustainability is at the heart of everything we do. 
                          We are committed to promoting farming practices that protect the environment and ensure long-term agricultural success.</li>

                          <li> <b>Innovation:</b>
                          Our innovative approach ensures that our clients are equipped with cutting-edge tools and strategies to thrive in a rapidly changing world.</li>

                          <li> <b> Integrity:</b>
                          Integrity is the foundation of our relationships with clients, partners, and stakeholders. We conduct our business with honesty, transparency, 
                          and ethical responsibility, ensuring that our actions align with our words. At SSFI, we believe that trust is earned through consistent, r
                          eliable service and a steadfast commitment to doing what is right.</li>

                          </ul>
                        
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </div>
                </Tab.Container>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="about-content_box content-box-gap pl-lg-60">
                <div className="section-title section-title-left mb-15 wow fadeInUp">
                  <span className="sub-title">About Us</span>
                  <h2>Smart Sustainable Farming Initiatives (SSFI)</h2>
                </div>
                <p>
                   We are a leading agricultural consulting and training organization dedicated to promoting sustainable, 
                   technology-driven farming practices. Established in 2023, SSFI serves as a trusted partner for farmers, 
                   agribusinesses, educational institutions, and government organizations, offering a range of solutions that 
                   blend traditional farming expertise with innovative technology and a commitment to environmental stewardship.
                   </p>
                   <p>
                   At SSFI, we are driven by core values of sustainability, innovation, and community impact. 
                   Through our consulting services, technology integration, training programs, and research initiatives, 
                   we aim to address critical issues like food security, resource management, and environmental preservation.
{" "}
                  </p>
                <div className="row">
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-wheat-sack" />
                      </div>
                      <div className="text">
                        <h5>Sustainability</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInUp">
                      <div className="icon">
                        <i className="flaticon-grape" />
                      </div>
                      <div className="text">
                        <h5>Innovation</h5>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 col-sm-12">
                    <div className="food-card text-center mb-40 wow fadeInDown">
                      <div className="icon">
                        <i className="flaticon-cow" />
                      </div>
                      <div className="text">
                        <h5>Integrity</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End About Section ======*/}
      {/*====== Start Fun Fact Section ======*/}
      <section className="fun-fact-two p-r z-1 pb-130">
        <div className="fun-three_img wow fadeInRight">
          <img src="assets/images/choose/img-3.jpg" alt="" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-xl-10 col-lg-12">
              <div className="row">
                <div className="col-xl-10 col-lg-10">
                  <div className="section-title section-title-left mb-40 wow fadeInUp">
                    <span className="sub-title">Company Statistics</span>
                    <h2>
                    Why People Say We’re a Leading Force in Sustainable Agriculture
                    </h2>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="counter-item-two p-r z-1 mb-40 wow fadeInDown">
                    <div className="hover-icon">
                      <i className="flaticon-agriculture-1" />
                    </div>
                    <div className="icon">
                      <i className="flaticon-agriculture-1" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={3652} />+
                      </h2>
                      <p>Tons of Produce Harvested</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="counter-item-two p-r z-1 mb-40 wow fadeInUp">
                    <div className="hover-icon">
                      <i className="flaticon-cow-1" />
                    </div>
                    <div className="icon">
                      <i className="flaticon-cow-1" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={7563} />+
                      </h2>
                      <p>Units of Livestock Monitored</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="counter-item-two p-r z-1 mb-40 wow fadeInDown">
                    <div className="hover-icon">
                      <i className="flaticon-field" />
                    </div>
                    <div className="icon">
                      <i className="flaticon-field" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={9634} />+
                      </h2>
                      <p>Land Under Sustainable Management</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12">
                  <div className="counter-item-two p-r z-1 mb-40 wow fadeInUp">
                    <div className="hover-icon">
                      <i className="flaticon-tractor-1" />
                    </div>
                    <div className="icon">
                      <i className="flaticon-tractor-1" />
                    </div>
                    <div className="text">
                      <h2 className="number">
                        <Counter end={3652} />+
                      </h2>
                      <p>Precision Farming Tools Deployed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Fun Fact Section ======*/}
      {/*====== Start CTA Section ======*/}
      <section className="cta-one p-r">
        <div className="container-fluid">
          <div className="cta-wrap-one">
            <div className="row">
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInLeft"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-1.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Need Sustainable Farming Help?</h2>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn bordered-btn bordered-white">
                        Get Quote
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-xl-6 col-lg-12">
                <div
                  className="cta-item_one bg_cover text-white mb-40 wow fadeInRight"
                  style={{
                    backgroundImage: "url(assets/images/cta/cta-2.jpg)",
                  }}
                >
                  <div className="text d-flex justify-content-between align-items-center">
                    <h2>Join Our Farmer Field School</h2>
                    <Link legacyBehavior href="/contact">
                      <a className="main-btn bordered-btn bordered-white">
                       Enroll Now
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End CTA Section ======*/}
      {/*====== Start Service Section ======*/}
      <section className="service-two dark-black-bg pt-165">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title section-title-white text-center mb-50 wow fadeInDown">
                <span className="sub-title">Our Services:</span>
                <h2>What We Provide For Your Better Health</h2>
              </div>
            </div>
          </div>
          <Slider {...serviceSliderOne} className="service-slider-one">
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/service/img-2.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link legacyBehavior href="/services">
                    <a>Consulting Services</a>
                  </Link>
                </h3>
                <p>
                Soil Analysis and Mapping | Irrigation & Crop Planning | Precision Farming & Sustainability Strategy.
                </p>
                <Link legacyBehavior href="/services">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/service/img-3.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link legacyBehavior href="/services">
                    <a>Technology Integration:</a>
                  </Link>
                </h3>
                <p>
                Precision Agriculture Tools | 
Automated Irrigation & Livestock Monitoring | Fertilizer and Pesticides Application
                </p>
                <Link legacyBehavior href="/services">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInUp">
              <div className="img-holder">
                <img src="assets/images/service/img-4.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link legacyBehavior href="/services">
                    <a>Training and Education:</a>
                  </Link>
                </h3>
                <p>
                Workshops and Training | Farmer Field Schools
 </p>

                
                <Link legacyBehavior href="/services">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
            <div className="single-service-item-two text-center wow fadeInDown">
              <div className="img-holder">
                <img src="assets/images/service/img-3.jpg" alt="" />
              </div>
              <div className="text">
                <h3 className="title">
                  <Link legacyBehavior href="/services">
                    <a>Farm Management:</a>
                  </Link>
                </h3>
                <p>
                Crop/Livestock Monitoring, Integrated Pest & Soil Health Management

                </p>
                <Link legacyBehavior href="/services">
                  <a className="main-btn btn-yellow">Read More</a>
                </Link>
              </div>
            </div>
          </Slider>
        </div>
      </section>
      {/*====== End Service Section ======*/}
    
     
      {/*====== Start Blog Section ======*/}
      <section className="blog-two pb-90 pt-130 light-gray-bg pb-160">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-10">
              <div className="section-title text-center mb-60 wow fadeInDown">
                <span className="sub-title">Latest News Blog</span>
                <h2>Read Latest News &amp; Blog Get Every Updates</h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-4.jpg" alt="Post Image" />
                </div>
                <div className="entry-content bg-white">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <a href="#">Smashin Podcast Episode Ferdinande Web Dead</a>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInDown">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-5.jpg" alt="Post Image" />
                </div>
                <div className="entry-content bg-white">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <Link legacyBehavior href="/blog-details">
                      <a>Powerful Termimand Linec Tools Modern Web</a>
                    </Link>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-12">
              <div className="blog-post-item-two mb-40 wow fadeInUp">
                <div className="post-thumbnail">
                  <img src="assets/images/blog/img-6.jpg" alt="Post Image" />
                </div>
                <div className="entry-content bg-white">
                  <a href="#" className="cat-btn">
                    Organic Foods
                  </a>
                  <h3 className="title">
                    <a href="#">Smashin Podcast Episode Ferdinande Web Dead</a>
                  </h3>
                  <div className="post-meta">
                    <ul>
                      <li>
                        <span>
                          <i className="far fa-calendar-alt" />
                          <a href="#">25 March 2022</a>
                        </span>
                      </li>
                      <li>
                        <span>
                          <i className="far fa-comments" />
                          <a href="#">Comment (5)</a>
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};
export default Index3;
