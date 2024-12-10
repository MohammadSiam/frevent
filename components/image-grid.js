import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./image-grid.module.css";

const ImageGrid = ({ className = "" }) => {
  return (
    <div className={[styles.imageGrid, className].join(" ")}>
      <div className={styles.imageRow}>
        <div className={styles.productDetailCard}>
          <Image
            className={styles.productImageIcon}
            loading="lazy"
            width={370}
            height={550}
            alt=""
            src="/product-image-12@2x.png"
          />
          <h2 className={styles.productDetail}>
            Wall Paneling using Particle board
          </h2>
        </div>
        <div className={styles.productDetailCard1}>
          <Image
            className={styles.productImageIcon1}
            loading="lazy"
            width={370}
            height={300}
            alt=""
            src="/product-image-13@2x.png"
          />
          <h2 className={styles.productDetail1}>
            Luxury Cabinets Particle board
          </h2>
        </div>
        <div className={styles.productDetailCard}>
          <Image
            className={styles.productImageIcon}
            loading="lazy"
            width={370}
            height={550}
            alt=""
            src="/product-image-14@2x.png"
          />
          <h2 className={styles.productDetail}>
            Luxury Countertops using Particle board
          </h2>
        </div>
        <div className={styles.productDetailCard1}>
          <Image
            className={styles.productImageIcon3}
            loading="lazy"
            width={370}
            height={300}
            alt=""
            src="/product-image-15@2x.png"
          />
          <h2 className={styles.productDetail1}>
            Interior Using Partical Board
          </h2>
        </div>
      </div>
    </div>
  );
};

ImageGrid.propTypes = {
  className: PropTypes.string,
};

export default ImageGrid;
