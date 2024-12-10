import V6AllButton from "./v6-all-button";
import PropTypes from "prop-types";
import styles from "./frame-component1.module.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <div className={[styles.sectionHeadlineParent, className].join(" ")}>
      <h1 className={styles.sectionHeadline}>
        <p className={styles.whereYourVision}>Where your vision</p>
        <p className={styles.whereYourVision}>
          <span className={styles.becomes}>becomes</span>
          <span> reality</span>
        </p>
      </h1>
      <div className={styles.descriptionContainer}>
        <div className={styles.sectionInfoDescription}>
          For every expression we’ve designed a surface, just for your decor.
          Choose from our wide range of premium surface solutions.
        </div>
        <V6AllButton
          continue1="Default"
          exploreMore="Default"
          exploreProducts="Explore Products"
          inquiryNow="Default"
          knowMore="Default"
          reachOutForACustomsService="Default"
          seeMaterials="Default"
          submitMessage="Default"
          v6AllButtonMargin="unset"
          v6AllButtonPosition="unset"
          v6AllButtonTop="unset"
          v6AllButtonLeft="unset"
          exploreProducts1="Explore All"
          vector23="/vector-23.svg"
          vector22="/vector-22.svg"
        />
      </div>
    </div>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
