import DetailBlock from "./detail-block";
import PropTypes from "prop-types";
import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.labelWrapper}>
            <h1 className={styles.label}>partical</h1>
          </div>
          <div className={styles.footnoteParent}>
            <h1 className={styles.label}>boards</h1>
            <h1 className={styles.sectionTitle}>
              <p className={styles.smartChoiceFor}>Smart choice for</p>
              <p className={styles.costEffectiveSolutions}>
                <span>{`cost-effective `}</span>
                <span className={styles.solutions}>solutions</span>
              </p>
            </h1>
          </div>
        </div>
      </div>
      <div className={styles.horizontalBlock}>
        <DetailBlock
          footerIcon="/footer-icon.svg"
          better="Better"
          quality="Quality"
          description="We provide our customers with high-quality materials."
        />
        <DetailBlock
          detailBlockMinWidth="17.313rem"
          footerIcon="/footer-icon-1.svg"
          labelWidth="16.875rem"
          labelDisplay="inline-block"
          labelAlignSelf="unset"
          better="Friendly"
          quality="Budget"
          description="Our prices are reasonable, and even the average person can afford them."
        />
        <DetailBlock
          detailBlockMinWidth="17.313rem"
          footerIcon="/footer-icon-2.svg"
          labelWidth="16.875rem"
          labelDisplay="inline-block"
          labelAlignSelf="unset"
          better="Eco-Friendly"
          quality="Production"
          description="Our service is prompt because we understand the importance of customer satisfaction."
        />
      </div>
    </div>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
