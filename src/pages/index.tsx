import Header from "@/components/Header";
import Image from "next/image";

import {
  headerMenu,
  trustedCompanies,
  tabData,
  faqData,
} from "@/util/demmyData";
import { Container } from "react-bootstrap";

import bannerDashboard from "../../public/images/banner-sec-dashboard.png";
import TrustedCompanies from "@/components/TrustedCompanies";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import MonitorTab from "@/components/MonitorTab";
import dotPattern from "../../public/images/dotpattern.svg";
import Accordion from "react-bootstrap/Accordion";
import Faq from "@/components/Faq";
import { useState } from "react";
import tablist from '../../public/images/tablist.png';
import Footer from "@/components/Footer";
export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Email submitted:", email);
  };
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
              <TrustedCompanies companiesLogo={trustedCompanies} />
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
                <strong>exceptional customer support</strong> every day. <strong> Our
                team carefully reviews each ticket </strong>to ensure your concerns are
                understood, addressed, and resolved as quickly as possible. You
                can count on us to{" "}
                <strong>deliver consistent, reliable assistance</strong>{" "}
                whenever you need it.
              </p>
            </div>
          </div>
        </Container>
      </section>
      <section className="monitor">
        <Container className="custom-container">
          <Tabs
            defaultActiveKey="ticket-list"
            id="uncontrolled-tab-example"
            className="justify-center monitor__tabWrapper"
          >
            {tabData.map((data) => (
              <Tab
                eventKey={data.eventKey}
                title={data.title}
                className="monitor__tabItem"
              >
                <>
                  <MonitorTab
                    key={data.id}
                    image={data.image}
                    bodyTitle={data.bodyTitle}
                    paragraph={data.paragraph}
                  />
                </>
              </Tab>
            ))}
          </Tabs>
        </Container>
      </section>
      <section className="perfect-hub">
        <p className="perfect-hub__subtitle">
          Integrates with apps you use daily
        </p>

        <h1 className="perfect-hub__title">
          The perfect hub for all your <br />
          essential business apps.
        </h1>

        <p className="perfect-hub__description">
          Discover our multi-channel toolset with 130+ ticketing features and
          200+ integrations with the tools you love.
        </p>

        <button className="perfect-hub__button">Get Started</button>
      </section>
      <section className="features-section">
        <Container className="custom-container">
          <div className="features-section__wrapper">
            <div className="feature-card card-1 justify-center p-24">
              <div className="content max-w-[307px]">
                <h3>Manage all your customer messages</h3>
                <p>
                  Keep customers informed with powerful messaging and real-time
                  ticket updates. Deliver the high-quality support they expect.
                </p>
              </div>
            </div>

            <div className="feature-card card-2">
              <div className="content center">
                <h3>Collaborate with your team</h3>
                <p>
                  Work seamlessly with your team to resolve issues faster, while
                  keeping customers updated every step of the way.
                </p>
              </div>
            </div>

            <div className="feature-card card-3">
              <div className="left-split">
                <h3>Automate your Ticket response</h3>
              </div>
              <div className="right-split">
                <p>
                  Effortlessly decrease support volumes and boost customer
                  satisfaction with automation.
                </p>
              </div>
            </div>

            <div className="feature-card card-4 justify-center p-24">
              <div className="content max-w-[307px]">
                <h3>Clean and user friendly Ticket Compose</h3>
                <p>
                  Create and send detailed responses directly from your
                  helpdesk, with rich text formatting, attachments, and canned
                  replies.
                </p>
              </div>

              <div className="dots">
                <Image src={dotPattern} alt="dot pattern" />
              </div>
            </div>
          </div>
        </Container>
      </section>
      <section className="faq-section">
        <Container className="custom-container">
          <div className="faq-section__wrapper">
            <div className="faq-section__header text-center">
              <p className="perfect-hub__subtitle">
                Frequently Asked Questions
              </p>

              <h1 className="perfect-hub__title">
                Need Help? Start with our FAQ
              </h1>
            </div>
            <div className="faq-section__accordion">
              <Accordion defaultActiveKey="0">
                {faqData.map((data, index) => (
                  <Faq
                    id={data.id}
                    eventKeyIndex={index}
                    accordionHeader={data.accordionHeader}
                    title={data.title}
                    paragraph={data.paragraph}
                  />
                ))}
              </Accordion>
            </div>
          </div>
        </Container>
      </section>
      <section className="support-section">
        <Container className="custom-container">
          <div className="support-section__content-wrapper">
            <div className="support-section__text-content">
              <h1 className="support-section__main-heading">
                Ready to Transform Your Customer Support?
              </h1>

              <p className="support-section__subheading">
                Join over 50,000 companies using HelpDesk to deliver exceptional
                customer experiences. Start your free trial today and see the
                difference in minutes.
              </p>

              <form className="signup-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  id="email"
                  placeholder="Enter work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="email-input"
                  required
                />
                <button type="submit" className="signup-button">
                  Sign Up
                </button>
              </form>

              <div className="features">
                <span className="feature-item">Free 14-day trial</span>
                <span className="dot">·</span>
                <span className="feature-item">No credit card required</span>
                <span className="dot">·</span>
                <span className="feature-item">
                  Advanced ticketing made easy
                </span>
              </div>
            </div>

            <div className="support-section__image-content">
              <Image src={tablist}  alt="HelpDesk Dashboard"/>
            </div>
          </div>
        </Container>
      </section>
     <Footer/>
    </>
  );
}
