import styles from "../styles/components/Header.module.css";
// import logo from "../assets/images/techLogo.png";
import svceLogo from "../assets/images/svcelogo.png";
import { Link } from "react-scroll";
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

function Header() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <>
    
      <div
        className={`${styles.navMobile} ${
          isNavOpen ? styles.open : styles.hide
        }`}
      >
        <IoClose
          className={styles.close}
          onClick={() => {
            setIsNavOpen(false);
          }}
        />
        
        
        <nav >
        
          <Link smooth={true} offset={-100} to={"home"}>
            Home
          </Link>
          <Link smooth={true} offset={-100} to={"about"}>
            About
          </Link>
          <Link smooth={true} offset={-100} to={"domain"}>
            Domains
          </Link>
          <Link smooth={true} offset={-100} to={"coord"}>
            Coordinators
          </Link>
          <Link smooth={true} offset={-100} to={"location"}>
            Location
          </Link>
        </nav>
      </div>
      <div className={styles.container}>
        <section>
          {/* <Link to={"/"}>
            <img src={logo} alt="Tech Fest" className={styles.logo} />
          </Link> */}
          <img src={svceLogo} alt="SVCE Logo" className={styles.svceLogo} />
        </section>
        <IoMenu
          className={styles.menu}
          onClick={() => {
            setIsNavOpen(true);
          }}
        />
        <nav className={styles.navDesktop}>
          <Link offset={-100} smooth={true} to={"home"}>
            Home
          </Link>
          <Link offset={-100} smooth={true} to={"about"}>
            About
          </Link>
          <Link offset={-100} smooth={true} to={"domain"}>
            Domains
          </Link>
          <Link offset={-100} smooth={true} to={"coord"}>
          Coordinator
          </Link>
          <Link offset={-100} smooth={true} to={"location"}>
            Location
          </Link>
        </nav>
      </div>
    </>
  );
}

export default Header;
