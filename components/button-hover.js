import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./button-hover.module.css";

const ButtonHover = ({
  className = "",
  property1 = "Default",
  actionIconBackground,
  actionSeparator,
}) => {
  return (
    <div
      className={[styles.buttonHover, className].join(" ")}
      data-property1={property1}
    >
      <Image
        className={styles.actionContainerIcon}
        width={90}
        height={80}
        alt=""
        src="/action-container.svg"
      />
      <Image
        className={styles.actionBackgroundIcon}
        width={90}
        height={80}
        alt=""
        src="/action-container.svg"
      />
      <Image
        className={styles.actionIconWrapper}
        width={90}
        height={80}
        alt=""
        src="/action-container.svg"
      />
      <Image
        className={styles.actionIconBackground}
        width={270}
        height={1}
        alt=""
        src={actionIconBackground}
      />
      <div className={styles.frameParent}>
        <div className={styles.copyCheck1Parent}>
          <Image
            className={styles.copyCheck1Icon}
            width={24}
            height={24}
            alt=""
            src="/copycheck-1.svg"
          />
          <div className={styles.compare}>Compare</div>
        </div>
        <div className={styles.reportSearch1Parent}>
          <Image
            className={styles.reportSearch1Icon}
            width={24}
            height={24}
            alt=""
            src="/reportsearch-1.svg"
          />
          <div className={styles.query}>Query</div>
        </div>
        <div className={styles.handMove1Parent}>
          <Image
            className={styles.handMove1Icon}
            width={24}
            height={24}
            alt=""
            src="/handmove-1.svg"
          />
          <div className={styles.view}>View</div>
        </div>
      </div>
      <Image
        className={styles.actionSeparatorIcon}
        width={270}
        height={1}
        alt=""
        src={actionSeparator}
      />
    </div>
  );
};

ButtonHover.propTypes = {
  className: PropTypes.string,
  actionIconBackground: PropTypes.string.isRequired,
  actionSeparator: PropTypes.string.isRequired,

  /** Variant props */
  property1: PropTypes.number,
};

export default ButtonHover;
