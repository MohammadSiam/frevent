import Image from "next/image";
import V6MenuName from "./v6-menu-name";
import PropTypes from "prop-types";
import styles from "./v6-header.module.css";

const V6Header = ({ className = "", property1 = "Default" }) => {
  return (
    <header
      className={[styles.v6Header, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} />
      </div>
      <nav className={styles.menuContainer}>
        <nav className={styles.menuItems}>
          <V6MenuName property1="Default" company="Company" />
          <V6MenuName
            property1="Default"
            v6MenuNameWidth="4.188rem"
            company="Products"
            companyWidth="4.25rem"
          />
          <V6MenuName
            property1="Default"
            v6MenuNameWidth="4.625rem"
            company="Lookbook"
            companyWidth="4.625rem"
          />
        </nav>
      </nav>
      <div className={styles.logoContainer}>
        <Image
          className={styles.logoIcon}
          width={162}
          height={50}
          alt=""
          src="/logo.svg"
        />
      </div>
      <nav className={styles.menuContainer1}>
        <nav className={styles.v6MenuNameParent}>
          <V6MenuName
            property1="Default"
            v6MenuNameWidth="6.125rem"
            company="Sustainability"
            companyWidth="6.188rem"
          />
          <V6MenuName
            property1="Default"
            v6MenuNameWidth="2.875rem"
            company="Media"
            companyWidth="2.938rem"
          />
          <V6MenuName
            property1="Default"
            v6MenuNameWidth="3.688rem"
            company="Contact"
            companyWidth="3.75rem"
          />
        </nav>
      </nav>
    </header>
  );
};

V6Header.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default V6Header;
