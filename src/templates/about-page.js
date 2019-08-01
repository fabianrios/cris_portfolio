import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import { injectIntl, FormattedMessage } from "gatsby-plugin-intl"
import Education from '../components/Education/Education'
import List from '../components/List/List'

export const AboutPageTemplate = ({ title, content, contentComponent, education, language, others, other_education, work }) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
              <h4 className="title is-4">
                <FormattedMessage id="education" />
              </h4>
              {/* <Education className="education" degrees={education.degrees} /> */}
              {/* <List title="work" content={work.projects} /> */}
              <List title="further" content={other_education} />
              <h3 className="title is-3">
                <FormattedMessage id="languages" />
              </h3>
              <ul className="languages">
                {language.entry.map((entry, index) => (
                  <li key={index}>
                    <span className="date">{entry.title}</span>
                    <div className="info">
                      <p>{entry.level}</p>
                    </div>
                  </li>
                ))}  
              </ul>
              <br />
              <h3 className="title is-3">
                <FormattedMessage id="interest" />
              </h3>
              <ul className="interest">
                {others.entry.map((entry, index) => (
                  <li key={index}>
                    <span className="date">{entry.title}</span>
                    <div className="info">
                      <p>{entry.description}</p>
                    </div>
                  </li>
                ))}  
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  education: PropTypes.shape({
    degrees: PropTypes.array
  }),
  work: PropTypes.array,
  other_education: PropTypes.array,
  language: PropTypes.shape({
    entry: PropTypes.array,
  }),
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log('data', data)
  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        content={post.html}
        education={post.frontmatter.education}
        work={post.frontmatter.work}
        other_education={post.frontmatter.other_education}
        language={post.frontmatter.language}
        others={post.frontmatter.others}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default injectIntl(AboutPage)

export const aboutPageQuery = graphql`
  query AboutPage($langKey: String!) {
    markdownRemark(frontmatter: {langKey: {eq: $langKey}, templateKey: {eq: "about-page"}}) {
      html
      id
      frontmatter {
        title
        langKey
        other_education {
          startdate(formatString: "MMMM DD, YYYY")
          projects {
            title
            description
          }
        }
        language {
          entry {
            level
            title
          }
        }
        others {
          entry {
            description
            title
          }
        }
      }
    }
  }
`
