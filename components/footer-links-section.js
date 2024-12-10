import PropTypes from "prop-types";
import styles from "./footer-links-section.module.css";

const FooterLinksSection = ({ className = "" }) => {
  return (
    <div className={[styles.footerLinksSection, className].join(" ")}>
      <div className={styles.linkTitles}>
        <div className={styles.aboutTitle}>About</div>
        <div className={styles.aboutTitle}>Products</div>
        <div className={styles.aboutTitle}>Contact</div>
        <div className={styles.aboutTitle}>Resources</div>
      </div>
      <div className={styles.linkListParent}>
        <div className={styles.linkList}>
          <div className={styles.linkText}>About us</div>
          <div className={styles.linkText}>MDF</div>
          <div className={styles.linkText}>Contact Us</div>
          <div className={styles.linkText}>Application</div>
        </div>
        <div className={styles.linkList}>
          <div className={styles.linkText4}>{`Mission & Vision`}</div>
          <div className={styles.linkText4}>HDF Flooring</div>
          <div className={styles.linkText4}>Career</div>
          <div className={styles.linkText4}>Installation Instructions</div>
        </div>
        <div className={styles.aboutLinks}>
          <div className={styles.aboutList}>
            <div className={styles.aboutItems}>
              <div className={styles.linkText8}>Directors</div>
              <div className={styles.aboutSubLinks}>
                <div className={styles.linkText9}>Particle Board</div>
                <div className={styles.linkText9}>HPL</div>
                <div className={styles.linkText9}>Doors</div>
                <div className={styles.linkText9}>All Products</div>
              </div>
            </div>
            <div className={styles.copyrightText}>
              ©2024 fervent multiboard industries LTD.
            </div>
          </div>
          <div className={styles.resourceLinks}>
            <div className={styles.resourceList}>
              <div className={styles.linkText13}>Product Query</div>
            </div>
            <div className={styles.copyrightText}>
              Crafted by Brandmyth Digital.
            </div>
          </div>
          <div className={styles.contactLinks}>
            <div className={styles.contactList}>
              <div className={styles.contactItems}>
                <div className={styles.linkText9}>House builder Support</div>
                <div className={styles.linkText9}>Merchants</div>
                <div className={styles.linkText9}>Architect Resources</div>
                <div className={styles.linkText9}>Case Studies</div>
              </div>
            </div>
            <div className={styles.legal}>
              <div className={styles.linkText18}>Terms and Conditions</div>
              <h3 className={styles.separatorDot}>•</h3>
              <div className={styles.linkText19}>Privacy Policy</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.footerLinksSectionChild} />
    </div>
  );
};

FooterLinksSection.propTypes = {
  className: PropTypes.string,
};

export default FooterLinksSection;
