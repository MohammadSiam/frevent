import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./v6-c-t-a.module.css";

const V6CTA = ({ className = "" }) => {
  return (
    <div className={[styles.v6Cta, className].join(" ")}>
      <div className={styles.callToActionBackground} />
      <div className={styles.v6CtaInner}>
        <div className={styles.sectionTitleParent}>
          <h1 className={styles.sectionTitle}>
            Order our products to build your dream.
          </h1>
          <div className={styles.v6AllButton}>
            <div className={styles.inquiryButton}>
              <div className={styles.inquiryButtonContainer}>
                <Image
                  className={styles.inquiryButtonContainerChild}
                  width={11}
                  height={10}
                  alt=""
                  src="/group-120.svg"
                />
              </div>
              <div className={styles.inquiryNow}>Quiry now</div>
              <div className={styles.inquiryButtonContainer1}>
                <Image
                  className={styles.inquiryButtonContainerItem}
                  width={10}
                  height={10}
                  alt=""
                  src="/group-119.svg"
                />
              </div>
            </div>
            <div className={styles.vectorParent}>
              <Image
                className={styles.frameChild}
                width={110}
                height={110}
                alt=""
                src="/vector-23-2.svg"
              />
              <div className={styles.vectorWrapper}>
                <Image
                  className={styles.frameItem}
                  width={110}
                  height={1}
                  alt=""
                  src="/vector-22-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.ctaSectionFrameParent}>
        <div className={styles.ctaSectionFrame}>
          <div className={styles.actionContent}>
            <div className={styles.label}>Download</div>
            <div className={styles.actionDescription}>
              <div className={styles.actionDescriptionChild} />
              <h2 className={styles.descriptionText}>Our catalog</h2>
            </div>
          </div>
          <Image
            className={styles.downloadIconFrame}
            width={40}
            height={40}
            alt=""
            src="/download-icon-frame.svg"
          />
        </div>
        <div className={styles.callToActionFrame}>
          <Image
            className={styles.ctaImageIcon}
            width={240}
            height={235}
            alt=""
            src="/cta-image@2x.png"
          />
          <div className={styles.ctaIconFrameWrapper}>
            <Image
              className={styles.ctaIconFrame}
              width={40}
              height={39}
              alt=""
              src="/cta-icon-frame.svg"
            />
          </div>
          <h2 className={styles.ctaTitle}>About fervent</h2>
        </div>
      </div>
    </div>
  );
};

V6CTA.propTypes = {
  className: PropTypes.string,
};

export default V6CTA;
