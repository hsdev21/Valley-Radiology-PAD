import React from "react"
import { graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GravityForm from "../../components/gravity-form/gravity-form"
import PageHeader from "../../components/page-header/page-header"
import { Container, Row, Col } from "react-bootstrap"
import pageStyles from "./pageStyles.module.scss"
import contentParser from "gatsby-wpgraphql-inline-images"

const Page = ({
  data: {
    wpcontent: {
      seo: {
        schema: { siteUrl, siteName },
      },
      page: { seo, title, content, date },
    },
  },
  pageContext: {
    pluginOptions: { wordPressUrl, uploadsUrl },
  },
}) => {
  const pageContent = contentParser({ content }, { wordPressUrl, uploadsUrl })
  return (
    <Layout>
      <SEO seoInfo={seo} siteUrl={siteUrl} siteName={siteName} date={date} />
      <PageHeader pageTitle={title} />
      <Container style={{ paddingTop: "50px" }}>
        <Row>
          <Col lg={8} className={pageStyles.pageContent}>
            <div>{pageContent}</div>
          </Col>
          <Col lg={4} className={pageStyles.sidebar}>
            <p>Schedule Your Evaluation</p>
            <p>
              <span>
                by calling <a href={"tel:+1-910-486-5700"}>910-486-5700</a>
              </span>
            </p>
            <p style={{ marginBottom: "20px" }}>
              <span>or fill out the form below.</span>
            </p>
            <GravityForm />
          </Col>
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query GetPagesQuery($id: ID!) {
    wpcontent {
      seo {
        schema {
          siteUrl
          siteName
        }
      }
      page(id: $id) {
        content
        title
        uri
        date
        seo {
          metaDesc
          metaKeywords
          opengraphAuthor
          opengraphDescription
          opengraphImage {
            altText
            sourceUrl
            mediaDetails {
              height
              width
            }
          }
          opengraphModifiedTime
          opengraphPublishedTime
          opengraphPublisher
          opengraphSiteName
          opengraphTitle
          opengraphType
          opengraphUrl
          title
        }
      }
    }
  }
`

export default Page
