import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./feature-card.module.css";

const FeatureCard = ({
  className = "",
  featureCardAlignSelf,
  fi17312798,
  featureLabel,
  featureNumber,
  featureNumberHeight,
  featureNumberWidth,
  featureNumberDisplay,
}) => {
  const featureCardStyle = useMemo(() => {
    return {
      alignSelf: featureCardAlignSelf,
    };
  }, [featureCardAlignSelf]);

  const featureNumberStyle = useMemo(() => {
    return {
      height: featureNumberHeight,
      width: featureNumberWidth,
      display: featureNumberDisplay,
    };
  }, [featureNumberHeight, featureNumberWidth, featureNumberDisplay]);

  return (
    <div
      className={[styles.featureCard, className].join(" ")}
      style={featureCardStyle}
    >
      <div className={styles.featureBackground} />
      <div className={styles.cardContent}>
        <Image
          className={styles.fi17312798Icon}
          width={50}
          height={50}
          alt=""
          src={fi17312798}
        />
        <div className={styles.labelContainer}>
          <Image
            className={styles.labelIcon}
            width={50}
            height={1}
            alt=""
            src="/label-icon.svg"
          />
          <h2 className={styles.featureLabel}>{featureLabel}</h2>
        </div>
      </div>
      <div className={styles.featureNumber} style={featureNumberStyle}>
        {featureNumber}
      </div>
    </div>
  );
};

FeatureCard.propTypes = {
  className: PropTypes.string,
  fi17312798: PropTypes.string.isRequired,
  featureLabel: PropTypes.string,
  featureNumber: PropTypes.string,

  /** Style props */
  featureCardAlignSelf: PropTypes.string,
  featureNumberHeight: PropTypes.string,
  featureNumberWidth: PropTypes.string,
  featureNumberDisplay: PropTypes.string,
};

export default FeatureCard;
