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
          <h3>
            Telephone: <a href="tel:+1-910-486-5700">910-486-5700</a>
          </h3>
          <h3>Fax: 910-486-5750</h3>
          <p>
            3186 Village Drive, Suite 201, Fayetteville, North Carolina 28304
            <br />
            Monday - Friday: 8am - 5pm
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d433.1576062478933!2d-78.92922515504485!3d35.03187866682101!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89ab149e1c47610d%3A0x5ee1a05f1243d7b6!2s3186%20Village%20Dr%20%23201%2C%20Fayetteville%2C%20NC%2028304!5e0!3m2!1sen!2sus!4v1627512966660!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "1px solid #C1D72F" }}
            loading="lazy"
            title="Fayetteville location map"
          ></iframe>
        </Col>
        <Col lg={6} className={`${footerStyles.map} text-center`}>
          <h3>
            Telephone: <a href="tel:+1-919-331-2001">919-331-2001</a>
          </h3>
          <h3>Fax: 919-331-2003</h3>
          <p>
            169 Rawls Road, Angier, North Carolina 27501
            <br />
            Monday - Friday: 8am - 5pm
          </p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12990.270197847285!2d-78.743866!3d35.51497!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x85e68e6baa2255d9!2sValley%20Radiology!5e0!3m2!1sen!2sus!4v1627512870640!5m2!1sen!2sus"
            width="100%"
            height="350"
            style={{ border: "1px solid #C1D72F" }}
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
