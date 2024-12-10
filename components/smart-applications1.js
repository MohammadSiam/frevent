import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./smart-applications1.module.css";

const SmartApplications1 = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.rectangleParent}>
        <Image
          className={styles.frameChild}
          width={370}
          height={450}
          alt=""
          src="/rectangle-901@2x.png"
        />
        <Image
          className={styles.frameItem}
          loading="lazy"
          width={370}
          height={450}
          alt=""
          src="/rectangle-902@2x.png"
        />
      </div>
      <div className={styles.greatForHobbyists}>
        Great for hobbyists and DIY enthusiasts.
      </div>
      <h2 className={styles.commercial}>Commercial</h2>
    </div>
  );
};

SmartApplications1.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default SmartApplications1;
