import Image from "next/image";
import CommitmentSection from "../components/commitment-section";
import Banner from "../components/banner";
import V6Header from "../components/v6-header";
import BannerBackground from "../components/banner-background";
import FrameComponent from "../components/frame-component";
import FrameComponent2 from "../components/frame-component2";
import SideContent from "../components/side-content";
import CommitmentSection1 from "../components/commitment-section1";
import FrameComponent1 from "../components/frame-component1";
import ProductShowcase from "../components/product-showcase";
import AdditionalSection from "../components/additional-section";
import Footer from "../components/footer";
import BannerWrapper from "../components/banner-wrapper";
import ImageGrid from "../components/image-grid";
import FrameComponent3 from "../components/frame-component3";
import V6CTA from "../components/v6-c-t-a";
import LogoSection from "../components/logo-section";
import FooterLinksSection from "../components/footer-links-section";
import styles from "./index.module.css";

const Layouts = () => {
  return (
    <div className={styles.layouts}>
      <div className={styles.shape} />
      <CommitmentSection />
      <Banner />
      <main className={styles.header}>
        <V6Header property1="Default" />
        <BannerBackground />
        <section className={styles.footerContainer}>
          <div className={styles.shape1} />
          <FrameComponent />
          <Image
            className={styles.maskGroupIcon}
            loading="lazy"
            width={1170}
            height={719}
            alt=""
            src="/mask-group@2x.png"
          />
          <FrameComponent2 />
        </section>
      </main>
      <SideContent />
      <CommitmentSection1 />
      <div className={styles.imageContainer}>
        <div className={styles.shape2} />
        <Image
          className={styles.featuredImageIcon}
          width={540}
          height={650}
          alt=""
          src="/featured-image@2x.png"
        />
      </div>
      <div className={styles.title}>Sustainability</div>
      <div className={styles.description}>
        At Fervent Muliboard Industries Ltd, we prioritize sustainability in our
        manufacturing processes. Our HPL panels are produced with eco-friendly
        materials and practices, ensuring minimal environmental impact.
      </div>
      <div className={styles.detailBlock}>
        <div className={styles.detailRow}>
          <Image
            className={styles.imageContainerIcon}
            width={80}
            height={80}
            alt=""
            src="/image-container.svg"
          />
          <div className={styles.subheading}>Recycled materials</div>
          <div className={styles.detail}>
            Made from recycled wood chips and sawdust.
          </div>
        </div>
        <div className={styles.detailRow}>
          <Image
            className={styles.imageContainerIcon}
            width={80}
            height={80}
            alt=""
            src="/image-container-1.svg"
          />
          <div className={styles.subheading}>Low-emission resins</div>
          <div className={styles.detail}>
            Use of environmentally friendly adhesives.
          </div>
        </div>
        <div className={styles.detailRow}>
          <Image
            className={styles.imageContainerIcon}
            width={80}
            height={80}
            alt=""
            src="/image-container-2.svg"
          />
          <div className={styles.subheading}>Sustainable sourcing</div>
          <div className={styles.detail}>
            Wood sourced from responsibly managed forests.
          </div>
        </div>
      </div>
      <div className={styles.backgroundShapeWrapper}>
        <div className={styles.backgroundShape} />
      </div>
      <div className={styles.exploreSection}>
        <div className={styles.sectionBackground} />
        <FrameComponent1 />
        <ProductShowcase />
      </div>
      <div className={styles.additionalSectionParent}>
        <AdditionalSection />
        <Footer />
        <div className={styles.bannerContainer}>
          <BannerWrapper />
          <ImageGrid />
        </div>
        <FrameComponent3 />
        <V6CTA />
        <div className={styles.v6Footer}>
          <LogoSection />
          <FooterLinksSection />
        </div>
      </div>
      <div className={styles.footerBackgroundWrapper}>
        <div className={styles.footerBackground} />
      </div>
      <div className={styles.footerIconBackground} />
    </div>
  );
};

export default Layouts;
