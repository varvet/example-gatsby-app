import React from "react"
import { Link, graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <form method="POST" data-netlify="true" name="contact" action="/success">
      <label>
        Title
        <input type="text" name="title" />
      </label>
      <br />

      <label>
        Message
        <textarea name="message" />
      </label>

      <button type="submit">Post message!</button>
    </form>

    <h1>Hi people</h1>
    <ul>
      {data.dato.allPosts.map(post => (
        <li>
          <h1>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
export const query = graphql`
  query IndexQuery {
    dato {
      allPosts {
        id
        title
        body
      }
    }
  }
`
