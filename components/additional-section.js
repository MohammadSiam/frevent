import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./additional-section.module.css";

const AdditionalSection = ({ className = "" }) => {
  return (
    <div className={[styles.additionalSection, className].join(" ")}>
      <Image
        className={styles.sectionImageIcon}
        width={1440}
        height={900}
        alt=""
        src="/section-image@2x.png"
      />
      <div className={styles.additionalInfoTextBlock}>
        <div className={styles.additionalSectionBackground} />
        <div className={styles.highlightShape} />
        <h1 className={styles.additionalInfoSubtitleContainer}>
          <span>{`Let’s `}</span>
          <span className={styles.design}>design</span>
        </h1>
        <div className={styles.additionalInfoTitle}>
          Experience our products in virtual rooms.
        </div>
      </div>
      <div className={styles.imageGallery}>
        <div className={styles.additionalInfoBlock}>
          <Image
            className={styles.additionalInfoImage}
            loading="lazy"
            width={160}
            height={120}
            alt=""
            src="/additional-info-image@2x.png"
          />
          <Image
            className={styles.additionalInfoImage}
            loading="lazy"
            width={160}
            height={120}
            alt=""
            src="/additional-info-image-1@2x.png"
          />
          <Image
            className={styles.additionalInfoImage}
            width={160}
            height={120}
            alt=""
            src="/additional-info-image-2@2x.png"
          />
          <Image
            className={styles.additionalInfoImage}
            loading="lazy"
            width={160}
            height={120}
            alt=""
            src="/additional-info-image-1@2x.png"
          />
          <Image
            className={styles.additionalInfoImage}
            loading="lazy"
            width={160}
            height={120}
            alt=""
            src="/additional-info-image@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

AdditionalSection.propTypes = {
  className: PropTypes.string,
};

export default AdditionalSection;
