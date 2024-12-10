import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./detail-block.module.css";

const DetailBlock = ({
  className = "",
  detailBlockMinWidth,
  footerIcon,
  labelWidth,
  labelDisplay,
  labelAlignSelf,
  better,
  quality,
  description,
}) => {
  const detailBlockStyle = useMemo(() => {
    return {
      minWidth: detailBlockMinWidth,
    };
  }, [detailBlockMinWidth]);

  const labelStyle = useMemo(() => {
    return {
      width: labelWidth,
      display: labelDisplay,
      alignSelf: labelAlignSelf,
    };
  }, [labelWidth, labelDisplay, labelAlignSelf]);

  return (
    <div
      className={[styles.detailBlock, className].join(" ")}
      style={detailBlockStyle}
    >
      <Image
        className={styles.footerIcon}
        loading="lazy"
        width={100}
        height={100}
        alt=""
        src={footerIcon}
      />
      <div className={styles.verticalContainer}>
        <h2 className={styles.label} style={labelStyle}>
          <p className={styles.better}>{better}</p>
          <p className={styles.better}>{quality}</p>
        </h2>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
};

DetailBlock.propTypes = {
  className: PropTypes.string,
  footerIcon: PropTypes.string.isRequired,
  better: PropTypes.string,
  quality: PropTypes.string,
  description: PropTypes.string,

  /** Style props */
  detailBlockMinWidth: PropTypes.string,
  labelWidth: PropTypes.string,
  labelDisplay: PropTypes.string,
  labelAlignSelf: PropTypes.string,
};

export default DetailBlock;
