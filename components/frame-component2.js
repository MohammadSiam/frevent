import Image from "next/image";
import PropTypes from "prop-types";
import styles from "./frame-component2.module.css";

const FrameComponent2 = ({ className = "" }) => {
  return (
    <div className={[styles.sectionTitleParent, className].join(" ")}>
      <h1 className={styles.sectionTitle}>Composition</h1>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.backgroundShapeParent}>
            <div className={styles.backgroundShape} />
            <Image
              className={styles.lpdlLayers122}
              width={502}
              height={286}
              alt=""
              src="/lpdllayers1-2-2@2x.png"
            />
            <Image
              className={styles.frameChild}
              loading="lazy"
              width={189}
              height={80}
              alt=""
              src="/vector-26.svg"
            />
            <Image
              className={styles.frameItem}
              width={189}
              height={11}
              alt=""
              src="/vector-27.svg"
            />
            <Image
              className={styles.frameInner}
              width={249}
              height={11}
              alt=""
              src="/vector-28.svg"
            />
            <Image
              className={styles.vectorIcon}
              loading="lazy"
              width={253}
              height={45}
              alt=""
              src="/vector-29.svg"
            />
          </div>
          <div className={styles.settingsContainerWrapper}>
            <div className={styles.settingsContainer}>
              <div className={styles.settingOne}>
                <div className={styles.setting}>
                  <div className={styles.number}>1</div>
                </div>
                <div className={styles.settingLabelOne}>
                  <h2 className={styles.label}>Overlay</h2>
                  <div className={styles.description}>
                    Transparent melamine film for additional protection
                  </div>
                </div>
              </div>
              <div className={styles.settingTwo}>
                <div className={styles.setting1}>
                  <div className={styles.number1}>2</div>
                </div>
                <div className={styles.labelParent}>
                  <h2 className={styles.label}>Decor Paper</h2>
                  <div className={styles.description}>
                    Plain colour or printed paper Melamine impregnated
                  </div>
                </div>
              </div>
              <div className={styles.settingsContainer}>
                <div className={styles.settingTwo}>
                  <div className={styles.setting1}>
                    <div className={styles.number1}>3</div>
                  </div>
                  <div className={styles.labelParent}>
                    <h2 className={styles.label}>Core</h2>
                    <div className={styles.description}>
                      Layers of Phenolic Kraft paper as per required thickness
                      of final product
                    </div>
                  </div>
                </div>
                <div className={styles.settingBlock}>
                  <div className={styles.setting1}>
                    <div className={styles.number3}>4</div>
                  </div>
                  <div className={styles.labelGroup}>
                    <h2 className={styles.label}>Underlay</h2>
                    <div className={styles.description3}>(When Required)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent2;
