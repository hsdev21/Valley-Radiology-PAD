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
              <h1>
                Uterine Fibroid Relief is Possible – Without Invasive Surgery!
              </h1>
              <h2>
                Safe, effective, and personalized care for your uterine fibroids
                is available at Valley Radiology.
              </h2>
              <p>
                Doctors Murali Meka and Bryan Swilley specialize in the
                diagnosis and treatment of all types of uterine fibroids. With a
                strong focus and understanding of effective therapy through
                interventional radiology and uterine fibroid embolization (UFE),
                uterine fibroid symptom relief is available to all women. Our
                team of skilled doctors provides sought-after treatment and
                state-of-the-art care that fits your personal medical needs
                without the requirement for extensive surgery or long recovery
                timelines. Relief from uterine fibroids is possible with UFE at
                Valley Radiology.
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.heroForm}>
              <h3>Schedule Your Evaluation</h3>
              <p>
                <small>
                  by Calling <a href="+1-910-323-2209">910-323-2209</a> or
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
          Leading Radiologists for Advanced Diagnosis and Treatment of UFE
        </Container>
      </Container>
      <Container fluid>
        <Container className={homePageStyles.genericSection}>
          <Row className={homePageStyles.mobileReverse}>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Were you diagnosed with uterine fibroids?</h2>
              <p>
                Between 20-70% of women develop fibroids during their
                reproductive years. Fibroids are one of the most common
                reproductive diagnoses in women. While 99% of cases are
                considered non-life threatening, we understand that the symptoms
                can be painful and difficult to live with. Our non-invasive
                treatment can rid you of symptoms, like heavy bleeding,
                abdominal pain and general discomfort, with minimal recovery
                time and lasting results.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/uterine-fibroids/"
                >
                  Learn More
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section2.childImageSharp.fluid}
                alt="A woman holding her abdomen in pain."
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
                alt="A smiling woman relaxing."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>Uterine Fibroid Embolization (UFE) Relieves Symptoms</h2>
              <p>
                Fibroid pain can range in severity from person to person. The
                most common symptoms include abdominal and pelvic pain and heavy
                bleeding during the menstrual cycle. Uterine fibroid
                embolization (UFE) is a minimally invasive treatment option that
                utilizes interventional radiology to eliminate the symptoms of
                fibroids for good, without the long hospital stay or extended
                recovery time of traditional treatment options.{" "}
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/uterine-fibroid-embolization-ufe/"
                >
                  Relief is Here
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
              <h2>Avoid a Hysterectomy</h2>
              <p>
                UFE is a low-risk treatment option with a high-success rate. UFE
                is performed in an outpatient setting and typically completed
                under an hour. With the use of a specialized camera, a catheter
                is inserted into a patient’s groin or wrist. Embolic material is
                injected into blood vessels that feed the fibroids, depriving
                them of their blood supply. Over time the fibroids begin to
                shrink and disappear, along with the symptoms. UFE Is one of the
                safest and most successful alternatives to a hysterectomy.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/interventional-radiology/"
                >
                  Recover Faster
                </Button>
              </p>
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <Img
                className={homePageStyles.homeImg}
                fluid={data.section4.childImageSharp.fluid}
                alt="A woman holding her hands in a heart shape over her abdomen."
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
                alt="A doctor writing at a desk."
              />
            </Col>
            <Col lg={6} className={homePageStyles.verticalCenter}>
              <h2>
                Request a UFE Consultation Today with our Team of Interventional
                Radiology Experts!
              </h2>
              <p>
                Use our easy online contact form or call{" "}
                <a href="tel:+1-910-486-5700">910-486-5700</a> to learn more
                about personal treatment options for your uterine fibroids
                today.
              </p>
              <p className={homePageStyles.buttonBottom}>
                <Button
                  variant={"primary"}
                  className={homePageStyles.mainBtn}
                  href="/contact-us/"
                >
                  Learn More
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
                Our Fayetteville Clinic, offers the diagnoses and treatment of
                uterine fibroids and is accepting new patients today. Schedule
                your appointment now.
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
                We're ready to help.
              </h2>
              <p className="text-center">
                {" "}
                Call <a href="tel:+1-910-323-2209">910-323-2209</a>
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
