import Image from "next/image";
import PropTypes from "prop-types";
import { useMemo } from "react";
import styles from "./v6-all-button.module.css";

const V6AllButton = ({
  className = "",
  continue1 = "Default",
  exploreMore = "Default",
  exploreProducts = "Default",
  inquiryNow = "Default",
  knowMore = "Default",
  reachOutForACustomsService = "Default",
  seeMaterials = "Default",
  submitMessage = "Default",
  v6AllButtonMargin,
  v6AllButtonPosition,
  v6AllButtonTop,
  v6AllButtonLeft,
  exploreProducts1,
  vector23,
  vector22,
}) => {
  const v6AllButtonStyle = useMemo(() => {
    return {
      margin: v6AllButtonMargin,
      position: v6AllButtonPosition,
      top: v6AllButtonTop,
      left: v6AllButtonLeft,
    };
  }, [v6AllButtonMargin, v6AllButtonPosition, v6AllButtonTop, v6AllButtonLeft]);

  return (
    <div
      className={[styles.v6AllButton, className].join(" ")}
      data-continue={continue1}
      data-exploreMore={exploreMore}
      data-exploreProducts={exploreProducts}
      data-inquiryNow={inquiryNow}
      data-knowMore={knowMore}
      data-reachOutForACustomsService={reachOutForACustomsService}
      data-seeMaterials={seeMaterials}
      data-submitMessage={submitMessage}
      style={v6AllButtonStyle}
    >
      <div className={styles.buttonContent}>
        <div className={styles.buttonContentInner}>
          <Image
            className={styles.frameChild}
            width={11}
            height={10}
            alt=""
            src="/group-120.svg"
          />
        </div>
        <div className={styles.exploreProducts}>{exploreProducts1}</div>
        <div className={styles.buttonContentChild}>
          <Image
            className={styles.frameItem}
            width={10}
            height={10}
            alt=""
            src="/group-119.svg"
          />
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.vectorWrapper}>
          <Image
            className={styles.frameInner}
            width={145}
            height={1}
            alt=""
            src={vector23}
          />
        </div>
        <Image
          className={styles.vectorIcon}
          width={145}
          height={145}
          alt=""
          src={vector22}
        />
      </div>
    </div>
  );
};

V6AllButton.propTypes = {
  className: PropTypes.string,
  exploreProducts1: PropTypes.string,
  vector23: PropTypes.string.isRequired,
  vector22: PropTypes.string.isRequired,

  /** Variant props */
  continue1: PropTypes.number,
  exploreMore: PropTypes.number,
  exploreProducts: PropTypes.number,
  inquiryNow: PropTypes.number,
  knowMore: PropTypes.number,
  reachOutForACustomsService: PropTypes.number,
  seeMaterials: PropTypes.number,
  submitMessage: PropTypes.number,

  /** Style props */
  v6AllButtonMargin: PropTypes.string,
  v6AllButtonPosition: PropTypes.string,
  v6AllButtonTop: PropTypes.string,
  v6AllButtonLeft: PropTypes.string,
};

export default V6AllButton;
