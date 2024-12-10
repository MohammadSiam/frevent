import Image from "next/image";
import ShowcaseItems from "./showcase-items";
import PropTypes from "prop-types";
import styles from "./product-showcase.module.css";

const ProductShowcase = ({ className = "" }) => {
  return (
    <div className={[styles.productShowcase, className].join(" ")}>
      <div className={styles.showcaseItems}>
        <Image
          className={styles.productImageIcon}
          loading="lazy"
          width={270}
          height={600}
          alt=""
          src="/product-image@2x.png"
        />
        <h2 className={styles.productTitle}>Kitchen Room MDF Wood Flooring</h2>
      </div>
      <ShowcaseItems
        productImage="/product-image-1@2x.png"
        productTitle="Resturent HDF Flooring"
        productImage1="/product-image-2@2x.png"
        productTitle1="Retail Stores HDF Wood Flooring"
      />
      <div className={styles.showcaseItems}>
        <Image
          className={styles.productImageIcon}
          loading="lazy"
          width={270}
          height={600}
          alt=""
          src="/product-image-3@2x.png"
        />
        <h2 className={styles.productTitle}>Bedroom HDF Floor Covering</h2>
      </div>
      <ShowcaseItems
        showcaseItemsGap="34px"
        productImage="/product-image-4@2x.png"
        productTitle="Office HDF Flooring"
        productImage1="/product-image-5@2x.png"
        productImageIconBorderRadius="5px"
        productTitle1="Healthcare HDF Wood Flooring"
      />
    </div>
  );
};

ProductShowcase.propTypes = {
  className: PropTypes.string,
};

export default ProductShowcase;
