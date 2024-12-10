import Image from "next/image";
import Product from "./product";
import V6AllButton from "./v6-all-button";
import PropTypes from "prop-types";
import styles from "./side-content.module.css";

const SideContent = ({ className = "" }) => {
  return (
    <div className={[styles.sideContent, className].join(" ")}>
      <div className={styles.sideContainer}>
        <div className={styles.bg}>
          <div className={styles.backgroundShape} />
          <div className={styles.shapeWrapper}>
            <div className={styles.shape} />
            <div className={styles.sortFilterContainer}>
              <div className={styles.sortContainer}>
                <div className={styles.sectionTitleWrapper}>
                  <h1 className={styles.sectionTitle}>
                    <span>{`Product `}</span>
                    <span className={styles.range}>range</span>
                  </h1>
                </div>
                <div className={styles.sortOptions}>
                  <div className={styles.sortLabel}>Sort by</div>
                  <div className={styles.sortOption}>
                    <div className={styles.sortText}>Best Selling</div>
                  </div>
                </div>
                <div className={styles.filterSectionParent}>
                  <div className={styles.filterSection}>
                    <h3 className={styles.categoriesLabel}>Categories</h3>
                    <div className={styles.verticalContainer}>
                      <div className={styles.filterItemList}>
                        <div className={styles.filterOption}>
                          <div className={styles.categoryFilter}>MDF</div>
                          <Image
                            className={styles.minusOutline1Icon}
                            width={20}
                            height={20}
                            alt=""
                            src="/minusoutline-1.svg"
                          />
                        </div>
                        <div className={styles.categoryFilterOption}>
                          <div className={styles.categoryFilter}>
                            HDF Flooring
                          </div>
                          <Image
                            className={styles.minusOutline1Icon}
                            width={20}
                            height={20}
                            alt=""
                            src="/minusoutline-1.svg"
                          />
                        </div>
                        <div className={styles.filterOption1}>
                          <div className={styles.categoryFilter}>
                            Particle Board
                          </div>
                          <Image
                            className={styles.minusOutline1Icon}
                            width={20}
                            height={20}
                            alt=""
                            src="/minusoutline-2.svg"
                          />
                        </div>
                        <div className={styles.filterOption2}>
                          <div className={styles.categoryFilter}>HPL</div>
                          <Image
                            className={styles.minusOutline1Icon}
                            width={20}
                            height={20}
                            alt=""
                            src="/minusoutline-1.svg"
                          />
                        </div>
                        <div className={styles.filterOption2}>
                          <div className={styles.categoryFilter}>Doors</div>
                          <Image
                            className={styles.minusOutline1Icon}
                            width={20}
                            height={20}
                            alt=""
                            src="/minusoutline-1.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.productContainer}>
                    <Product image="/image@2x.png" />
                    <Product
                      productCardLeft="18.75rem"
                      productCardTop="0rem"
                      image="/image-1@2x.png"
                    />
                    <Product
                      productCardLeft="37.5rem"
                      productCardTop="0rem"
                      image="/image-2@2x.png"
                    />
                    <Product
                      productCardLeft="0rem"
                      productCardTop="34.5rem"
                      image="/image-3@2x.png"
                    />
                    <Product
                      productCardLeft="18.75rem"
                      productCardTop="34.5rem"
                      image="/image-4@2x.png"
                    />
                    <Product
                      productCardLeft="37.5rem"
                      productCardTop="34.5rem"
                      image="/image-5@2x.png"
                    />
                    <V6AllButton
                      continue1="Default"
                      exploreMore="Default"
                      exploreProducts="Explore Products"
                      inquiryNow="Default"
                      knowMore="Default"
                      reachOutForACustomsService="Default"
                      seeMaterials="Default"
                      submitMessage="Default"
                      exploreProducts1="Explore Products"
                      vector23="/vector-23.svg"
                      vector22="/vector-22.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.decorativeShape} />
        </div>
      </div>
    </div>
  );
};

SideContent.propTypes = {
  className: PropTypes.string,
};

export default SideContent;
