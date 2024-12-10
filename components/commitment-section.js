import Image from "next/image";
import SmartApplications from "./smart-applications";
import SmartApplications1 from "./smart-applications1";
import SmartApplications2 from "./smart-applications2";
import PropTypes from "prop-types";
import styles from "./commitment-section.module.css";

const CommitmentSection = ({ className = "" }) => {
  return (
    <div className={[styles.commitmentSection, className].join(" ")}>
      <div className={styles.commitmentSectionBackground} />
      <div className={styles.sectionTitleWrapper}>
        <Image
          className={styles.sectionTitleIcon}
          loading="lazy"
          width={180}
          height={1000}
          alt=""
          src="/section-title@2x.png"
        />
      </div>
      <div className={styles.commitmentCabinet}>
        <SmartApplications property1="Default" />
        <SmartApplications1 property1="Default" />
      </div>
      <div className={styles.commitmentOffice}>
        <div className={styles.instanceParent}>
          <SmartApplications2
            property1="Default"
            rectangle902="/rectangle-902-1@2x.png"
            rectangle901="/rectangle-901-1@2x.png"
          />
          <SmartApplications2
            property1="Default"
            groupDivMarginTop="-28.125rem"
            rectangle902="/rectangle-902-1@2x.png"
            rectangle901="/rectangle-901-1@2x.png"
            suitableForOfficeColor="#fff"
            officeColor="#fff"
          />
        </div>
      </div>
    </div>
  );
};

CommitmentSection.propTypes = {
  className: PropTypes.string,
};

export default CommitmentSection;
