import { useMemo } from "react";
import Image from "next/image";
import ButtonHover from "./button-hover";
import PropTypes from "prop-types";
import styles from "./product.module.css";

const Product = ({
  className = "",
  productCardLeft,
  productCardTop,
  image,
}) => {
  const productCardStyle = useMemo(() => {
    return {
      left: productCardLeft,
      top: productCardTop,
    };
  }, [productCardLeft, productCardTop]);

  return (
    <div
      className={[styles.productCard, className].join(" ")}
      style={productCardStyle}
    >
      <Image
        className={styles.imageIcon}
        loading="lazy"
        width={270}
        height={350}
        alt=""
        src={image}
      />
      <div className={styles.productInfo}>
        <div className={styles.mdfBoard}>MDF BOARD</div>
        <div className={styles.mdfBoardSheet}>High Density Fibre</div>
      </div>
      <ButtonHover
        property1="Default"
        actionIconBackground="/action-icon-background.svg"
        actionSeparator="/action-icon-background.svg"
      />
    </div>
  );
};

Product.propTypes = {
  className: PropTypes.string,
  image: PropTypes.string.isRequired,

  /** Style props */
  productCardLeft: PropTypes.string,
  productCardTop: PropTypes.string,
};

export default Product;
