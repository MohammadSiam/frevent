import { useMemo } from "react";
import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./showcase-items.module.css";

const ShowcaseItems = ({
  className = "",
  showcaseItemsGap,
  productImage,
  productTitle,
  productImage1,
  productImageIconBorderRadius,
  productTitle1,
}) => {
  const showcaseItemsStyle = useMemo(() => {
    return {
      gap: showcaseItemsGap,
    };
  }, [showcaseItemsGap]);

  const productImageIconStyle = useMemo(() => {
    return {
      borderRadius: productImageIconBorderRadius,
    };
  }, [productImageIconBorderRadius]);

  return (
    <div
      className={[styles.showcaseItems, className].join(" ")}
      style={showcaseItemsStyle}
    >
      <div className={styles.productImageParent}>
        <Image
          className={styles.productImageIcon}
          loading="lazy"
          width={270}
          height={260}
          alt=""
          src={productImage}
        />
        <h2 className={styles.productTitle}>{productTitle}</h2>
      </div>
      <div className={styles.productImageParent}>
        <Image
          className={styles.productImageIcon1}
          loading="lazy"
          width={270}
          height={260}
          alt=""
          src={productImage1}
          style={productImageIconStyle}
        />
        <h2 className={styles.productTitle1}>{productTitle1}</h2>
      </div>
    </div>
  );
};

ShowcaseItems.propTypes = {
  className: PropTypes.string,
  productImage: PropTypes.string.isRequired,
  productTitle: PropTypes.string,
  productImage1: PropTypes.string.isRequired,
  productTitle1: PropTypes.string,

  /** Style props */
  showcaseItemsGap: PropTypes.string,
  productImageIconBorderRadius: PropTypes.string,
};

export default ShowcaseItems;
