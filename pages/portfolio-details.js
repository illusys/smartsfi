import Link from "next/link";
import Slider from "react-slick";
import PageBanner from "../src/components/PageBanner";
import Layout from "../src/layouts/Layout";
import { projectsSliderOne } from "../src/sliderProps";
const PortfolioDetails = () => {
  return (
    <Layout>
      <PageBanner pageTitle={"Partnerships"} pageName=" SSFI's Partnership with IBBUL" />
      <section className="project-details-page pt-170 wow fadeInUp">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="project-details-wrapper">
                <div className="img-holder mb-50">
                  <img
                    src="assets/images/portfolio/single-portfolio-1.jpg"
                    alt=""
                  />
                </div>
                <div className="project-content pb-75">
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Partnership Overview</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="row">
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Category</h4>
                              <p>Educational Partnership | Sustainable Agriculture | Research Development</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Partner</h4>
                              <p>Ibrahim Badamasi Babangida University (IBBUL), Lapai</p>
                            </div>
                          </div>
                          <div className="col-lg-4 col-md-4 col-sm-12">
                            <div className="project-info-box mb-45">
                              <h4 className="mb-10">Date</h4>
                              <p>March 2025</p>
                            </div>
                          </div>
                        </div>
                        <div className="content">
                          <p>
                          In collaboration with IBBUL, SSFI launched a comprehensive academic and field-based partnership to train students, 
                          equip lecturers, and implement practical sustainable agriculture modules. This initiative supports capacity building in 
                          agri-tech, smart farming, and environmentally sound practices through curriculum integration, field demonstrations, and research projects.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-box">
                    <div className="row">
                      <div className="col-lg-5">
                        <h3 className="title mb-15">Partnership Benefit</h3>
                      </div>
                      <div className="col-lg-7">
                        <div className="content">
                        The collaboration empowers IBBUL’s agriculture faculty and students with practical exposure to precision agriculture, 
                        sustainable farming systems, and digital farm tools. It bridges the gap between theoretical knowledge and real-world application — 
                        fostering future-ready professionals in Nigeria’s agri-sector.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*====== End Portfolio Details ======*/}
      
    </Layout>
  );
};
export default PortfolioDetails;
