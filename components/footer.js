import Image from "next/image";
import DetailBlock from "./detail-block";
import PropTypes from "prop-types";
import styles from "./footer.module.css";

const Footer = ({ className = "" }) => {
  return (
    <div className={[styles.footer, className].join(" ")}>
      <div className={styles.footerContent}>
        <div className={styles.footerInfo}>
          <div className={styles.footerTitle}>
            <h1 className={styles.footerSubtitle}>
              <p className={styles.why}>Why</p>
              <p className={styles.chooseUs}>
                <span>{`choose `}</span>
                <span className={styles.us}>us</span>
              </p>
            </h1>
            <div className={styles.footerDescription}>
              We are dedicated to offering high-quality flooring products backed
              by unparalleled craftsmanship and customer service.
            </div>
          </div>
          <div className={styles.footerInfoRow}>
            <DetailBlock
              detailBlockMinWidth="15.5rem"
              footerIcon="/footer-icon.svg"
              labelWidth="unset"
              labelDisplay="unset"
              labelAlignSelf="stretch"
              better="Better"
              quality="Quality"
              description="Owing to its non-porous and easy to clean properties, it is resistant to marks, smudges and stains."
            />
            <DetailBlock
              detailBlockMinWidth="15.5rem"
              footerIcon="/footer-icon-1.svg"
              labelWidth="unset"
              labelDisplay="unset"
              labelAlignSelf="stretch"
              better="Friendly"
              quality="Budget"
              description="The tough surface of MerinoLam helps protect against scratches, especially from varying pressures of everyday use in an office environment."
            />
            <DetailBlock
              detailBlockMinWidth="15.5rem"
              footerIcon="/footer-icon-2.svg"
              labelWidth="unset"
              labelDisplay="unset"
              labelAlignSelf="stretch"
              better="Eco-Friendly"
              quality="Production"
              description="These show impact resistance of high standard."
            />
            <DetailBlock
              detailBlockMinWidth="15.5rem"
              footerIcon="/footer-icon-6.svg"
              labelWidth="unset"
              labelDisplay="unset"
              labelAlignSelf="stretch"
              better="Client"
              quality="Satisfaction"
              description="These laminates are moisture resistant, keeping the condition intact for long."
            />
          </div>
        </div>
        <div className={styles.footerCard}>
          <Image
            className={styles.footerImageIcon}
            width={530}
            height={600}
            alt=""
            src="/footer-image@2x.png"
          />
          <div className={styles.footerLinkBackground}>
            <div className={styles.footerLinkBackground1} />
            <Image
              className={styles.footerLinkIcon}
              width={15}
              height={15}
              alt=""
              src="/dot.svg"
            />
            <div className={styles.footerLinkBackgroundChild} />
            <div className={styles.footerLinkBackgroundItem} />
          </div>
        </div>
      </div>
      <h1 className={styles.footerTitle1}>
        <p className={styles.why}>{`More about fervent `}</p>
        <p className={styles.chooseUs}>Flash door</p>
      </h1>
      <div className={styles.footerDescription1}>
        <p className={styles.why}>
          Our Laminated Doors with High-Pressure Laminate (HPL) surfaces combine
          style and strength to create doors that are not only visually
          appealing but also highly durable.
        </p>
        <p className={styles.why}>&nbsp;</p>
        <p className={styles.why}>
          These doors are designed to withstand heavy use while maintaining
          their attractive appearance, making them perfect for both high-traffic
          residential and commercial environments.
        </p>
      </div>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
