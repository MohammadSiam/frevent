import ProductOption from "./product-option";
import PropTypes from "prop-types";
import styles from "./frame-component3.module.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={[styles.frameWrapper, className].join(" ")}>
      <div className={styles.sectionTitleParent}>
        <h1 className={styles.sectionTitle}>
          <span>{`Product `}</span>
          <span className={styles.lineup}>lineup</span>
        </h1>
        <div className={styles.productOptions}>
          <ProductOption
            productNumber="01"
            productImage="/product-image-16@2x.png"
            label="Doors"
          />
          <ProductOption
            productNumber="02"
            productNumberWidth="7.063rem"
            productNumberMinWidth="7.063rem"
            productImage="/product-image-17@2x.png"
            label="HDF"
          />
          <ProductOption
            productNumber="03"
            productNumberWidth="7.25rem"
            productNumberMinWidth="7.25rem"
            productImage="/product-image-18@2x.png"
            label="HPL"
          />
          <ProductOption
            productNumber="04"
            productNumberWidth="7.375rem"
            productNumberMinWidth="7.375rem"
            productImage="/product-image-19@2x.png"
            label="Particle Board"
          />
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
