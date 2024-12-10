import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./banner.module.css";

const Banner = ({ className = "" }) => {
  return (
    <div className={[styles.banner, className].join(" ")}>
      <div className={styles.bannerShape} />
      <div className={styles.bannerCard}>
        <Image
          className={styles.bannerCardImage}
          width={435}
          height={430}
          alt=""
          src="/banner-card-image@2x.png"
        />
        <h2 className={styles.bannerCardTitle}>Arvadonna Chestnut</h2>
        <div className={styles.bannerCardContent}>
          <div className={styles.bannerCardBackground} />
          <Image
            className={styles.dotIcon}
            width={15}
            height={15}
            alt=""
            src="/dot.svg"
          />
          <div className={styles.bannerCardContentInner}>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.bannerCardContentInner}>
            <div className={styles.frameChild} />
          </div>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {
  className: PropTypes.string,
};

export default Banner;
