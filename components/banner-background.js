import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner-background.module.css";

const BannerBackground = ({ className = "" }) => {
  return (
    <section className={[styles.bannerBackground, className].join(" ")}>
      <div className={styles.bannerBackground1}>
        <Image
          className={styles.bannerImageIcon}
          width={1005}
          height={790}
          alt=""
          src="/banner-image@2x.png"
        />
        <Image
          className={styles.bannerBackgroundChild}
          width={1005}
          height={790}
          alt=""
          src="/rectangle-973.svg"
        />
        <h1 className={styles.bannerText}>
          <span>{`Elevate Your Spaces with Exceptional `}</span>
          <span className={styles.durability}>Durability</span>
          <span> and Style</span>
        </h1>
        <div className={styles.sliderArrow}>
          <Image
            className={styles.v6SliderArrow}
            width={40}
            height={40}
            alt=""
            src="/v6--slider-arrow@2x.png"
          />
          <Image
            className={styles.v6SliderArrow1}
            width={40}
            height={40}
            alt=""
            src="/v6--slider-arrow-1@2x.png"
          />
        </div>
      </div>
      <div className={styles.bannerCardContent}>
        <div className={styles.frameParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.ellipseParent}>
              <div className={styles.frameChild} />
              <Image
                className={styles.iconContainer}
                width={40}
                height={40}
                alt=""
                src="/icon-container.svg"
              />
            </div>
          </div>
          <div className={styles.detailParent}>
            <div className={styles.detail}>Particle Board</div>
            <h2 className={styles.action}>Download catalog</h2>
          </div>
        </div>
        <div className={styles.bannerCardContentChild} />
        <Image
          className={styles.v6Chatbot}
          width={100}
          height={100}
          alt=""
          src="/v6--chatbot.svg"
        />
      </div>
    </section>
  );
};

BannerBackground.propTypes = {
  className: PropTypes.string,
};

export default BannerBackground;
