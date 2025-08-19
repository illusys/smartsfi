import Link from "next/link";
const OffcanvasPanel = ({ overlyPanel, togglePanel }) => {
  return (
    <div className={`offcanvas-panel ${overlyPanel ? "panel-on" : ""}`}>
      <div className="panel-overlay" onClick={() => togglePanel()} />
      <div className="offcanvas-panel-inner">
        <div className="panel-logo">
          <Link legacyBehavior href="/">
            <a>
              <img src="assets/images/logo/logo-1.png" alt="Logo" />
            </a>
          </Link>
        </div>
        <div className="about-us">
          <h5 className="panel-widget-title">About Us</h5>
          <p>
          Smart Sustainable Farming Initiatives (SSFI) is a leading agricultural
         consulting and training organization dedicated to promoting sustainable,
          technology-driven farming practices.
          </p>
        </div>
        <div className="contact-us">
          <h5 className="panel-widget-title">Contact Us</h5>
          <ul>
            <li>
              <i className="fal fa-map-marker-alt" />
              Suite 316 (3rd Floor) King's Plaza,
Plot 307, Ahmadu Bello-Way,
Opp. NAF Conference Centre, Kado Abuja
            </li>
            <li>
              <i className="fal fa-envelope-open" />
            
              <a href="mailto:info@smartsfi.com">info@smartsfi.com</a>
            </li>
            <li>
              <i className="fal fa-phone" />
              <a href="tel:+2347016241281">+234 701 6241 281</a>
              <a href="tel:+2347068814528">+234 706 8814 528</a>
            </li>
          </ul>
        </div>
        <a
          href="#"
          className="panel-close"
          onClick={(e) => {
            e.preventDefault();
            togglePanel();
          }}
        >
          <i className="fal fa-times" />
        </a>
      </div>
    </div>
  );
};
export default OffcanvasPanel;
