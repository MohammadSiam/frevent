import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./product-category-of-m-d-f.module.css";

const ProductCategoryOfMDF = ({ className = "", property1 = "Default" }) => {
  return (
    <div
      className={[styles.sliderContentWrapper, className].join(" ")}
      data-property1={property1}
    >
      <div className={styles.sliderContent}>
        <div className={styles.productCategoryOfMdfParent}>
          <h1 className={styles.productCategoryOfContainer}>
            <p className={styles.productCategory}>Product category</p>
            <p className={styles.ofMdf}>of MDF</p>
          </h1>
          <div className={styles.v6SliderArrowParent}>
            <Image
              className={styles.v6SliderArrow}
              width={40}
              height={40}
              alt=""
              src="/v6--slider-arrow-2@2x.png"
            />
            <Image
              className={styles.v6SliderArrow1}
              width={40}
              height={40}
              alt=""
              src="/v6--slider-arrow-3@2x.png"
            />
          </div>
        </div>
        <div className={styles.sliderProducts}>
          <div className={styles.productItemSingle}>
            <Image
              className={styles.imageIcon}
              loading="lazy"
              width={370}
              height={420}
              alt=""
              src="/image-6@2x.png"
            />
            <h2 className={styles.mrMdfBoard}>{`MR MDF Board `}</h2>
          </div>
          <div className={styles.productItem}>
            <Image
              className={styles.imageIcon1}
              loading="lazy"
              width={300}
              height={300}
              alt=""
              src="/image-7@2x.png"
            />
            <h2 className={styles.mdfBoardSheetContainer}>
              <p className={styles.mdfBoard}>MDF Board</p>
              <p className={styles.sheetMaterial}>(Sheet Material)</p>
            </h2>
          </div>
          <div className={styles.productItem1}>
            <Image
              className={styles.imageIcon2}
              loading="lazy"
              width={300}
              height={300}
              alt=""
              src="/image-8@2x.png"
            />
            <h2 className={styles.veneerMdf}>Veneer MDF</h2>
          </div>
          <div className={styles.productItem2}>
            <Image
              className={styles.imageIcon3}
              loading="lazy"
              width={300}
              height={300}
              alt=""
              src="/image-8@2x.png"
            />
            <h2
              className={styles.hmrHighMoisture}
            >{`HMR (High moisture Resitance) MDF `}</h2>
          </div>
          <div className={styles.productItem3}>
            <Image
              className={styles.productItemChild}
              loading="lazy"
              width={300}
              height={300}
              alt=""
              src="/rectangle-928@2x.png"
            />
            <h2 className={styles.hplMoistureProofContainer}>
              <p className={styles.hplMoisture}>HPL Moisture</p>
              <p className={styles.proof}>Proof</p>
            </h2>
          </div>
          <div className={styles.productItem4}>
            <Image
              className={styles.productItemItem}
              loading="lazy"
              width={300}
              height={300}
              alt=""
              src="/rectangle-928@2x.png"
            />
            <h2 className={styles.melamineMoistureProofContainer}>
              <p className={styles.melamineMoisture}>Melamine Moisture</p>
              <p className={styles.proofMdf}>Proof MDF</p>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductCategoryOfMDF.propTypes = {
  className: PropTypes.string,

  /** Variant props */
  property1: PropTypes.number,
};

export default ProductCategoryOfMDF;
