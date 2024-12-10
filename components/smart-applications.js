import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./smart-applications.module.css";

const SmartApplications = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.rectangleParent}>
        <Image
          className={styles.frameChild}
          loading="lazy"
          width={370}
          height={450}
          alt=""
          src="/rectangle-900@2x.png"
        />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.perfectForFurniture}>
        Perfect for furniture, cabinets, and shelving.
      </div>
      <h2 className={styles.residential}>Residential</h2>
    </div>
  );
};

SmartApplications.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default SmartApplications;
