import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./commitment-section1.module.css";

const CommitmentSection1 = ({ className = "" }) => {
  return (
    <div className={[styles.commitmentSection, className].join(" ")}>
      <div className={styles.commitmentSectionBackground} />
      <div className={styles.detailInfoContainer}>
        <Image
          className={styles.unionIcon}
          loading="lazy"
          width={600}
          height={610}
          alt=""
          src="/union.svg"
        />
        <div className={styles.detailTextContainer}>
          <div className={styles.detailInfoBlock}>
            <h1 className={styles.detailInfoTitleContainer}>
              <span>{`Luxury meets `}</span>
              <span className={styles.durability}>durability</span>
            </h1>
            <div className={styles.detailInfoSubtitle}>
              Our HDF flooring enhances the look of your home and office with
              high-quality engineering and exquisite finishes. It boosts your
              home’s value and appeal.
            </div>
          </div>
          <div className={styles.detailInfoBlock}>
            <h1 className={styles.detailInfoTitleContainer1}>
              <p className={styles.eleganceIn}>Elegance in</p>
              <p className={styles.everyStep}>every step</p>
            </h1>
            <div className={styles.detailInfoSubtitle}>
              Our HDF flooring offers a variety of colors, patterns, and designs
              to suit any space. Popular choices include grey HDF flooring, and
              we offer customization to match your preferences at affordable
              prices.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CommitmentSection1.propTypes = {
  className: PropTypes.string,
};

export default CommitmentSection1;
