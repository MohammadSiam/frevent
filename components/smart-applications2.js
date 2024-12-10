import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./smart-applications2.module.css";

const SmartApplications2 = ({
  className = "",
  property1 = "Default",
  groupDivMarginTop,
  rectangle902,
  rectangle901,
  suitableForOfficeColor,
  officeColor,
}) => {
  const groupDivStyle = useMemo(() => {
    return {
      marginTop: groupDivMarginTop,
    };
  }, [groupDivMarginTop]);

  const suitableForOfficeStyle = useMemo(() => {
    return {
      color: suitableForOfficeColor,
    };
  }, [suitableForOfficeColor]);

  const officeStyle = useMemo(() => {
    return {
      color: officeColor,
    };
  }, [officeColor]);

  return (
    <div
      className={[styles.frameParent, className].join(" ")}
      data-property1={property1}
      style={groupDivStyle}
    >
      <div className={styles.rectangleParent}>
        <Image
          className={styles.frameChild}
          width={370}
          height={450}
          alt=""
          src={rectangle902}
        />
        <Image
          className={styles.frameItem}
          width={370}
          height={450}
          alt=""
          src={rectangle901}
        />
      </div>
      <div className={styles.suitableForOffice} style={suitableForOfficeStyle}>
        Suitable for office furniture, retail fixtures, and more.
      </div>
      <h2 className={styles.office} style={officeStyle}>
        Office
      </h2>
    </div>
  );
};

SmartApplications2.propTypes = {
  className: PropTypes.string,
  rectangle902: PropTypes.string.isRequired,
  rectangle901: PropTypes.string.isRequired,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  groupDivMarginTop: PropTypes.string,
  suitableForOfficeColor: PropTypes.string,
  officeColor: PropTypes.string,
};

export default SmartApplications2;
