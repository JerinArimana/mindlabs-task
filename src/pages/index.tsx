import Header from "@/components/Header";
import Image from "next/image";
import Accordion from "react-bootstrap/Accordion";
import { headerMenu } from "@/util/demmyText";
import { Container } from "react-bootstrap";
import Shopify from "../../public/images/shopify.png";
import Stripe from "../../public/images/Stripe_Logo.png";
import Slack from "../../public/images/Slack.png";
import Zoom from "../../public/images/Zoom.png";
import bannerDashboard from "../../public/images/banner-sec-dashboard.png";
export default function Home() {
  return (
    <>
      <Header headerMenu={headerMenu} />

      <section className="homebanner">
        <Container className="custom-container">
          <div className="homebanner_area">
            <div className="homebanner-wrapper">
              <div className="homebanner-content">
                <h1 className="homebanner-title">
                  <span className="brand-text">FlockDesk</span> speeds up
                  support and boosts
                  <span className="highlight-text"> retention.</span>
                </h1>

                <p className="homebanner-subtitle">
                  Deliver outstanding support and achieve new goals with
                  FlockDesk.
                </p>

                <div className="cta-buttons">
                  <button className="btn btn-primary">Get Started</button>
                  <button className="btn btn-secondary">Get a Demo</button>
                </div>
              </div>
            </div>
            <div className="trust-section">
              <p className="trust-text">
                Trusted by leading companies worldwide
              </p>
              <div className="company-logos">
                <Image src={Shopify} alt="Shopify" className="logo" />
                <Image src={Stripe} alt="Shopify" className="logo" />
                <Image src={Slack} alt="Shopify" className="logo" />
                <Image src={Zoom} alt="Shopify" className="logo" />
              </div>
            </div>
            <div className="dashboard-preview">
              <Image
                src={bannerDashboard}
                alt="FlockDesk Dashboard"
                className="dashboard-image"
              />
            </div>
            <div className="commitment-section">
              <p className="commitment-text">
                We are committed to providing{" "}
                <strong>exceptional customer support</strong> every day. Our
                team carefully reviews each ticket to ensure your concerns are
                understood, addressed, and resolved as quickly as possible. You
                can count on us to{" "}
                <strong>deliver consistent, reliable assistance</strong>{" "}
                whenever you need it.
              </p>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
