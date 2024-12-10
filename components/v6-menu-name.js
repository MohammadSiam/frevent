import { useMemo } from "react";
import PropTypes from "prop-types";
import styles from "./v6-menu-name.module.css";

const V6MenuName = ({
  className = "",
  property1 = "Default",
  v6MenuNameWidth,
  company,
  companyWidth,
}) => {
  const v6MenuNameStyle = useMemo(() => {
    return {
      width: v6MenuNameWidth,
    };
  }, [v6MenuNameWidth]);

  const companyStyle = useMemo(() => {
    return {
      width: companyWidth,
    };
  }, [companyWidth]);

  return (
    <div
      className={[styles.v6MenuName, className].join(" ")}
      data-property1={property1}
      style={v6MenuNameStyle}
    >
      <div className={styles.company} style={companyStyle}>
        {company}
      </div>
    </div>
  );
};

V6MenuName.propTypes = {
  className: PropTypes.string,
  company: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,

  /** Style props */
  v6MenuNameWidth: PropTypes.string,
  companyWidth: PropTypes.string,
};

export default V6MenuName;
