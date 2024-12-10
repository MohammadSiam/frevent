import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner-wrapper.module.css";
import FeatureCard from "./feature-card";
import ProductCategoryOfMDF from "./product-category-of-m-d-f";
import VerticalCard from "./vertical-card";

const BannerWrapper = ({ className = "" }) => {
  return (
    <div className={[styles.bannerWrapper, className].join(" ")}>
      <div className={styles.bannerImageWrapper}>
        <div className={styles.bannerImage}>
          <Image
            className={styles.bannerImageIcon}
            width={1440}
            height={900}
            alt=""
            src="/banner-image1@2x.png"
          />
          <div className={styles.bannerShape} />
          <div className={styles.bannerProducts}>
            <div className={styles.bannerBackground} />
            <div className={styles.bannerContent}>
              <VerticalCard
                productImage="/product-image-6@2x.png"
                productName="Brilliant Weave 4854"
              />
              <VerticalCard
                productImage="/product-image-7@2x.png"
                productName="Cairo Walnut 4427"
                productNameColor="rgba(255, 255, 255, 0.75)"
              />
              <VerticalCard
                productImage="/product-image-8@2x.png"
                productName="Napa Oak 3662"
                productNameColor="rgba(255, 255, 255, 0.75)"
              />
              <VerticalCard
                productImage="/product-image-9@2x.png"
                productName="Samoa Teak 456"
                productNameColor="rgba(255, 255, 255, 0.75)"
              />
              <VerticalCard
                productImage="/product-image-10@2x.png"
                productName="Valley Oak 4663"
                productNameColor="rgba(255, 255, 255, 0.75)"
              />
              <VerticalCard
                productImage="/product-image-11@2x.png"
                productName="Wenge Brew 675"
                productNameColor="rgba(255, 255, 255, 0.75)"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.featuresWrapperParent}>
        <div className={styles.featuresWrapper}>
          <div className={styles.featuresContent}>
            <div className={styles.feature}>
              <div className={styles.dRenderingWoodLogs2} />
              <div className={styles.backgroundShape} />
              <div className={styles.backgroundShape1} />
              <div className={styles.featureCardsContainer}>
                <div className={styles.featureCardsWrapper}>
                  <div className={styles.featureCardsContent}>
                    <div className={styles.featureInfoCards}>
                      <FeatureCard
                        fi17312798="/fi-17312798.svg"
                        featureLabel="Durability"
                        featureNumber="01"
                      />
                      <div className={styles.featureCard}>
                        <div className={styles.featureBackground} />
                        <div className={styles.fi10966857Parent}>
                          <Image
                            className={styles.fi10966857Icon}
                            width={50}
                            height={50}
                            alt=""
                            src="/fi-10966857.svg"
                          />
                          <div className={styles.vectorParent}>
                            <Image
                              className={styles.frameChild}
                              width={50}
                              height={1}
                              alt=""
                              src="/label-icon.svg"
                            />
                            <h2 className={styles.featureLabel}>
                              Aesthetic Appeal
                            </h2>
                          </div>
                        </div>
                        <div className={styles.featureNumber}>02</div>
                        <div className={styles.footerContent}>
                          <Image
                            className={styles.footerIcon}
                            width={800}
                            height={730}
                            alt=""
                            src="/footer-icon1.svg"
                          />
                          <h1 className={styles.footerSectionHeader}>
                            Features
                          </h1>
                          <div className={styles.footerSectionDescription}>
                            A flush door has a solid core particle board infill
                            with a wooden rail and stile framed around it and
                            sandwiched between an exterior grade HDF substrate
                            on the top and bottom.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.featureImage}>
                    <FeatureCard
                      featureCardAlignSelf="unset"
                      fi17312798="/fi-7765778.svg"
                      featureLabel="Smooth Finish"
                      featureNumber="03"
                      featureNumberHeight="3.125rem"
                      featureNumberWidth="2.563rem"
                      featureNumberDisplay="inline-block"
                    />
                    <FeatureCard
                      featureCardAlignSelf="unset"
                      fi17312798="/fi-7229125.svg"
                      featureLabel="Versatility"
                      featureNumber="04"
                      featureNumberHeight="3.25rem"
                      featureNumberWidth="2.563rem"
                      featureNumberDisplay="inline-block"
                    />
                    <FeatureCard
                      featureCardAlignSelf="unset"
                      fi17312798="/fi-16888672.svg"
                      featureLabel="Edge Banding"
                      featureNumber="05"
                      featureNumberHeight="3.188rem"
                      featureNumberWidth="2.563rem"
                      featureNumberDisplay="inline-block"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ProductCategoryOfMDF property1="Default" />
        </div>
        <div className={styles.doorSlider}>
          <div className={styles.doorSliderContent}>
            <div className={styles.sliderArrow}>
              <div className={styles.sectionBackgroundShape} />
              <div className={styles.shape} />
              <div className={styles.doorInfoContainer}>
                <div className={styles.doorInfoWrapper}>
                  <div className={styles.horizontalSectionContainer}>
                    <h1 className={styles.doorName}>
                      <span>{`Flash `}</span>
                      <span className={styles.door}>door</span>
                    </h1>
                    <div className={styles.sloganContainer}>
                      <div className={styles.doorSlogan}>
                        Simplicity and Strength in Perfect Harmony
                      </div>
                    </div>
                  </div>
                  <div className={styles.doorInfoWrapperInner}>
                    <div className={styles.sliceTitleParent}>
                      <h2 className={styles.sliceTitle}>
                        Smoked Oak Mixmatch Veneer
                      </h2>
                      <div className={styles.vectorWrapper}>
                        <Image
                          className={styles.frameItem}
                          width={36}
                          height={36}
                          alt=""
                          src="/vector-2.svg"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.sliderImageContainer}>
                <div className={styles.sliderImageWrapper}>
                  <div className={styles.sliderImageContent}>
                    <div className={styles.sliderProductImage}>
                      <Image
                        className={styles.sliderProductImage1}
                        loading="lazy"
                        width={230}
                        height={420}
                        alt=""
                        src="/slider-product-image@2x.png"
                      />
                    </div>
                    <div className={styles.imageSlider}>
                      <Image
                        className={styles.sliderProductImage2}
                        width={160}
                        height={300}
                        alt=""
                        src="/slider-product-image-1@2x.png"
                      />
                      <Image
                        className={styles.sliderProductImage3}
                        loading="lazy"
                        width={200}
                        height={350}
                        alt=""
                        src="/slider-product-image-2@2x.png"
                      />
                      <Image
                        className={styles.sliderProductImage4}
                        width={200}
                        height={350}
                        alt=""
                        src="/slider-product-image-3@2x.png"
                      />
                      <Image
                        className={styles.sliderProductImage5}
                        width={160}
                        height={300}
                        alt=""
                        src="/slider-product-image-4@2x.png"
                      />
                      <Image
                        className={styles.sliderArrowIcon}
                        width={1340}
                        height={40}
                        alt=""
                        src="/slider-arrow@2x.png"
                      />
                    </div>
                  </div>
                </div>
                <div className={styles.shape1} />
              </div>
            </div>
            <div className={styles.roundedRectangle} />
          </div>
          <div className={styles.testimonialSlider}>
            <div className={styles.testimonialContent}>
              <h1 className={styles.sectionTitle}>
                <p className={styles.createdToFit}>Created to fit</p>
                <p className={styles.yourWorld}>your world</p>
              </h1>
              <div className={styles.testimonialNavigation}>
                <div className={styles.sliderArrow1}>
                  <Image
                    className={styles.v6SliderArrow}
                    width={40}
                    height={40}
                    alt=""
                    src="/v6--slider-arrow-4@2x.png"
                  />
                  <Image
                    className={styles.v6SliderArrow1}
                    width={40}
                    height={40}
                    alt=""
                    src="/v6--slider-arrow-5@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerWrapper.propTypes = {
  className: PropTypes.string,
};

export default BannerWrapper;
