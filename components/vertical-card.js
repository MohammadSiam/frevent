import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./vertical-card.module.css";

const VerticalCard = ({
  className = "",
  productImage,
  productName,
  productNameColor,
}) => {
  const productNameStyle = useMemo(() => {
    return {
      color: productNameColor,
    };
  }, [productNameColor]);

  return (
    <div className={[styles.verticalCard, className].join(" ")}>
      <div className={styles.productInfo}>
        <Image
          className={styles.productImageIcon}
          width={80}
          height={80}
          alt=""
          src={productImage}
        />
      </div>
      <div className={styles.productName} style={productNameStyle}>
        {productName}
      </div>
    </div>
  );
};

VerticalCard.propTypes = {
  className: PropTypes.string,
  productImage: PropTypes.string.isRequired,
  productName: PropTypes.string,

  /** Style props */
  productNameColor: PropTypes.string,
};

export default VerticalCard;
