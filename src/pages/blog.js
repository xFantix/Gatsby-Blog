import React from 'react';
import { graphql } from 'gatsby';
import {Wrapper,Header} from './blogStyle';
import BlogList from '../components/blogList/blogList';
const Blog = ({ data }) => {
    return ( 
        <Wrapper>
            <Header>Blog</Header>
            {
                data.allDatoCmsArticle.edges.map(el=>(
                    <BlogList
                        title={el.node.title}
                        data={el.node.data}
                        paragraph={el.node.paragraph}
                    />
                ))
            }
        </Wrapper>
     );
}
export const query = graphql`
{
  allDatoCmsArticle {
    edges {
      node {
        originalId
        title
        paragraph
        data
      }
    }
  }
}
`
export default Blog;