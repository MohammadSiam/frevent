import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./product-option.module.css";

const ProductOption = ({
  className = "",
  productNumber,
  productNumberWidth,
  productNumberMinWidth,
  productImage,
  label,
}) => {
  const productNumberStyle = useMemo(() => {
    return {
      width: productNumberWidth,
      minWidth: productNumberMinWidth,
    };
  }, [productNumberWidth, productNumberMinWidth]);

  return (
    <div className={[styles.productOption, className].join(" ")}>
      <div className={styles.optionDetails}>
        <div className={styles.productNumber} style={productNumberStyle}>
          {productNumber}
        </div>
        <Image
          className={styles.productImageIcon}
          loading="lazy"
          width={270}
          height={400}
          alt=""
          src={productImage}
        />
      </div>
      <h1 className={styles.label}>{label}</h1>
    </div>
  );
};

ProductOption.propTypes = {
  className: PropTypes.string,
  productNumber: PropTypes.string,
  productImage: PropTypes.string.isRequired,
  label: PropTypes.string,

  /** Style props */
  productNumberWidth: PropTypes.string,
  productNumberMinWidth: PropTypes.string,
};

export default ProductOption;
