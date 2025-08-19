import Link from "next/link";
import { useState } from "react";

const MobileHeader = () => {
  const [activeMenu, setActiveMenu] = useState("");
  const activeMenuSet = (value) =>
      setActiveMenu(activeMenu === value ? "" : value),
    activeLi = (value) =>
      value === activeMenu ? { display: "block" } : { display: "none" };
  return (
    <nav className="main-menu d-block d-xl-none">
      <ul>
       
            <li>
              <Link legacyBehavior href="/">
                Home 
              </Link>
            </li>
           
        <li>
          <Link legacyBehavior href="/about">
            About
          </Link>
        </li>
      
            <li>
              <Link legacyBehavior href="/services">
                Our Services
              </Link>
            </li>
           
            <li>
              <Link legacyBehavior href="blog-standard">
                Blog 
              </Link>
            </li>
         
       
            <li>
              <Link legacyBehavior href="contact">
                Contact
              </Link>
            </li>
         
      </ul>
    </nav>
  );
};
export default MobileHeader;
