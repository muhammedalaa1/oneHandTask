import styles from "./nav.module.scss";
import navIcon from "../../../public/navbar-icon.svg";
import websiteIcon from "../../../public/website-icon.svg";
import Menu from "../../icons/Menu";
import { useState } from "react";

const Index = () => {
  const [mobileNav, setMobileNav] = useState(false);

  return (
    <div className={styles.background}>
      <div className={styles.container}>
        <nav className={styles.navContainer}>
          <div className={styles.logo}>
            <img src={navIcon} width={50} alt="" />
            <h2>Black IN Dashboard</h2>
          </div>
          <button className={styles.goTo}>
            <img src={websiteIcon} alt="" /> Go To Website
          </button>
          <div
            onClick={() => setMobileNav((prev) => !prev)}
            className={styles.menu}
          >
            <Menu />
          </div>
          <nav
            className={`${styles.mobileNav} ${
              mobileNav ? styles.open : styles.close
            }`}
          >
            <ul className={styles.listContainer}>
              <li>
                <button className={styles.goTo}>
                  <img src={websiteIcon} alt="" /> Go To Website
                </button>
              </li>
            </ul>
          </nav>
        </nav>
      </div>
    </div>
  );
};

export default Index;
