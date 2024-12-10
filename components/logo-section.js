import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./logo-section.module.css";

const LogoSection = ({ className = "" }) => {
  return (
    <div className={[styles.logoSection, className].join(" ")}>
      <Image
        className={styles.decorativeFrameIcon}
        width={405}
        height={395}
        alt=""
        src="/decorative-frame.svg"
      />
      <Image
        className={styles.logoIcon}
        width={194}
        height={60}
        alt=""
        src="/logo-1.svg"
      />
      <div className={styles.followUsLabelParent}>
        <div className={styles.followUsLabel}>Follow us</div>
        <div className={styles.socialIcons}>
          <Image
            className={styles.iconFacebook}
            width={24}
            height={24}
            alt=""
            src="/icon--facebook.svg"
          />
          <Image
            className={styles.iconFacebook}
            width={24}
            height={24}
            alt=""
            src="/icon--linkedin.svg"
          />
          <Image
            className={styles.iconFacebook}
            width={24}
            height={24}
            alt=""
            src="/icon--x.svg"
          />
        </div>
      </div>
    </div>
  );
};

LogoSection.propTypes = {
  className: PropTypes.string,
};

export default LogoSection;
