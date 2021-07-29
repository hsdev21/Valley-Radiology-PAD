import React from "react"
import Layout from "../components/layout"
import { Container, Row, Col, Button } from "react-bootstrap"
import Img from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
import homePageStyles from "./index.module.scss"
import GravityForm from "../components/gravity-form/gravity-form"
import SEO from "../components/seo"
import { GetHomePageMeta } from "../hooks/getHomePageMeta"
import { graphql } from "gatsby"

import aetna from "../images/aetna.jpg"
import blueShield from "../images/blue.jpg"
import cigna from "../images/cigna.jpg"
import humana from "../images/humana.jpg"
import medicaid from "../images/medicaid.jpg"
import united from "../images/united.jpg"

const IndexPage = ({ data }) => {
  const {
    seo: {
      schema: { siteUrl, siteName },
    },
    pages: { nodes },
  } = GetHomePageMeta()
  const { seo, date } = nodes[0]
  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <BackgroundImage
        fluid={data.section1.childImageSharp.fluid}
        className={`${homePageStyles.section1} ${homePageStyles.genericSection}`}
        style={{
          backgroundPosition: "top",
        }}
      >
        <Container>
          <Row className={homePageStyles.row}>
            <Col lg={6} className={`${homePageStyles.text}`}>
              <h1>Find out if you have peripheral artery disease</h1>
              <p>
                Peripheral artery disease (PAD) is when your arteries become
                narrowed or blocked, usually due to plaque or calcium buildup.
                This is a normal part of aging and primarily impacts the
                arteries in the legs. When blood vessels become blocked, painful
                wounds or ulcers can develop. At Valley Radiology, our highly
                trained vascular and interventional radiologists use their
                expertise and knowledge to treat PAD successfully.
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.heroForm}>
              <h3>Schedule Your Evaluation</h3>
              <p>
                <small>
                  by Calling <a href="+1-910-486-5700">910-486-5700</a> or
                  <br />
                  fill out the form below.
                </small>
              </p>
              <div className={homePageStyles.gravityForm}>
                <GravityForm className={homePageStyles.gravityForm} />
              </div>
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
      <Container fluid className={homePageStyles.callOut}>
        <Container>
          If left untreated, PAD could result in amputation, stroke, and even
          death
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row className={homePageStyles.mobileReverse}>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Don’t ignore the symptoms</h2>
              <p>
                <ul>
                  <li>Leg fatigue with pain while walking</li>
                  <li>Sores</li>
                  <li>Wounds or ulcers that do not heal</li>
                  <li>Discoloration of legs</li>
                  <li>Numbness or Tingling</li>
                </ul>
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact-us/"
                >
                  Book Online
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section2.childImageSharp.fluid}
                alt="A man holding his leg."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section3.childImageSharp.fluid}
                alt="A couple hiking outdoors."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Are you at high-risk for PAD?</h2>
              <p>
                Not everyone experiences the same symptoms of PAD. This
                condition is often misdiagnosed, making it vital to pay
                attention to risk factors. The most significant risk factors are
                hypertension, diabetes, and smoking. If you’re under 50 and
                overweight or have high blood pressure, we recommend a checkup
                and screening. If you’re over 65 and/or have leg pain, numbness,
                or other symptoms, make an appointment today to prevent future
                complications.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact-us/"
                >
                  Book Online
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row className={homePageStyles.mobileReverse}>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Receive a Timely Diagnoses and Tailored Treatment </h2>
              <p>
                The experienced specialists at Valley Radiology regularly
                diagnose and treat men and women with PAD. Our team will
                carefully diagnose your condition within state-of-the-art
                facilities and deliver a tailored treatment plan for best
                results. We also encourage and oversee lifestyle changes to
                reduce pain and enhance your quality of life.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/innovative-treatments/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section4.childImageSharp.fluid}
                alt="A technician putting a patient in an MRI machine."
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section5.childImageSharp.fluid}
                alt="Doctors Murali Meka and Bryan Swilley."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Meet Murali Meka, MD, and Bryan Swilley, MD</h2>
              <p>
                Our board-certified vascular and interventional specialists,
                Murali Meka, MD, and Bryan Swilley, MD, specialize in diagnosing
                and treating PAD. They each bring a strong focus and background
                in effective therapy through interventional radiology. Having
                this expertise in a single location, focused on you, means that
                you’re receiving the best treatment plan discussed among the
                team. Regardless of your diagnosis, we can help determine the
                next steps and provide a treatment option that works for you.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/our-radiologists/"
                >
                  Meet Our Expert Team
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={12} className={homePageStyles.verticalCenter}>
              <h3 className={`text-center`}>
                We Accept Many Plans from All Major Insurance Carriers
              </h3>
            </Col>
          </Row>
          <div className={`${homePageStyles.insurances}`}>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={aetna} alt="Aetna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={blueShield} alt="Blue Shield insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={cigna} alt="Cigna insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={humana} alt="Humana insurance logo" />
            </div>
            <div className={`${homePageStyles.insuranceItem}`}>
              <img src={medicaid} alt="Medicaid insurance logo" />
            </div>
            <div className={homePageStyles.insuranceItem}>
              <img src={united} alt="United Healthcare insurance logo" />
            </div>
          </div>
          <Row>
            <Col lg={12} className={`text-center`}>
              <p>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/insurance/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <Container fluid className={homePageStyles.lightBack}>
        <Container className={homePageStyles.genericSection}>
          <Row>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section7.childImageSharp.fluid}
                alt="Valley Radiology's building location."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Quality Care Close to Home</h2>
              <p>
                Receive the specialized care you deserve at Valley Radiology.
                Our Fayetteville Clinic offers diagnosis and treatment for men
                and women with peripheral artery disease and is now accepting
                new patients. Schedule your appointment to discuss your
                individualized treatment options.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact-us/"
                >
                  Contact Us Now
                </Button>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
      <BackgroundImage
        fluid={data.contactSection.childImageSharp.fluid}
        className={`${homePageStyles.contactSection}`}
        alt="A technician with a patient under a machine."
      >
        <Container>
          <Row>
            <Col
              lg={{ span: 6, offset: 3 }}
              className={homePageStyles.formContainer}
            >
              <h2>
                Contact Us
                <br />
                We're Ready to Help.
              </h2>
              <p className="text-center">
                {" "}
                Call <a href="tel:+1-910-486-5700">910-486-5700</a>
                <br />
                <small>Or Use Our Easy Online Form.</small>
              </p>
              <GravityForm />
            </Col>
          </Row>
        </Container>
      </BackgroundImage>
    </Layout>
  )
}

export const query = graphql`
  query {
    section1: file(relativePath: { eq: "hero.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section2: file(relativePath: { eq: "section-2.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section3: file(relativePath: { eq: "section-3.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section4: file(relativePath: { eq: "section-4.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section5: file(relativePath: { eq: "section-5.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    section7: file(relativePath: { eq: "section-7.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    aetna: file(relativePath: { eq: "aetna.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    blue: file(relativePath: { eq: "blue.jpg" }) {
      childImageSharp {
        fluid(quality: 90) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    contactSection: file(relativePath: { eq: "contact-us-bg.jpg" }) {
      childImageSharp {
        fluid(quality: 90, maxWidth: 1920) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default IndexPage
