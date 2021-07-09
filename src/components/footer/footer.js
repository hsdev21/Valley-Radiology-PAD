import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import footerStyles from "./footer.module.scss"
import FooterNav from "./footer-navigaton/footer-navigation"
import logo from "../../images/logo.png"

const Footer = () => (
  <>
    <Container className={footerStyles.footerTextContainer}>
      <Row>
        <Col className={`${footerStyles.footerLogo} text-center`}>
          <img
            className={footerStyles.footerLogo}
            src={logo}
            alt="Valley Radiology logo"
          />
        </Col>
      </Row>
      <Row>
        <Col lg={6} className={`${footerStyles.map} text-center`}>
          <h3>Telephone: <a href="tel:+1-910-323-2209">910-323-2209</a></h3>
          <h3>Fax: 910-485-3180</h3>
          <p>
            3186 Village Drive, Suite 101, Fayetteville, North Carolina 28304<br />
            Monday - Thursday: 8am - 5pm, Friday: 8am - 2pm</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.994732440035!2d-78.9312397847588!3d35.03186168035087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab149e1c387515%3A0x45994ef80c9f0e4!2s3186%20Village%20Dr%20%23101%2C%20Fayetteville%2C%20NC%2028304!5e0!3m2!1sen!2sus!4v1624917127935!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: '1px solid #C1D72F' }}
            loading="lazy"
            title="Fayetteville location map"
          ></iframe>
        </Col>
        <Col lg={6} className={`${footerStyles.map} text-center`}>
          <h3>Telephone: <a href="tel:+1-910-323-2209">910-323-2209</a></h3>
          <h3>Fax: 910-485-3180</h3>
          <p>
          169 Rawls Road, Angier, North Carolina 27501<br/>
          Monday - Friday: 8am - 5pm</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3266.994732440035!2d-78.9312397847588!3d35.03186168035087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab149e1c387515%3A0x45994ef80c9f0e4!2s3186%20Village%20Dr%20%23101%2C%20Fayetteville%2C%20NC%2028304!5e0!3m2!1sen!2sus!4v1624917232110!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{border: '1px solid #C1D72F'}}
            loading="lazy"
            title="Angier location map"
          ></iframe>
        </Col>
      </Row>
      <Row>
        <Col className={footerStyles.footerNav}>
          <FooterNav />
        </Col>
      </Row>
    </Container>
    <Container className={footerStyles.footerCopyRight} fluid>
      <span>
        &copy; {new Date().getFullYear()} Valley Radiology. All rights reserved.
        | Website by{" "}
        <a href="https://patientfetch.com" target="_blank" rel={"noreferrer"}>
          PatientFetch
        </a>
      </span>
    </Container>
  </>
)

export default Footer
