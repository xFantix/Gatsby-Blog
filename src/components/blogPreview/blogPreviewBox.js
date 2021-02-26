import React from 'react';
import {graphql,useStaticQuery} from 'gatsby';
import BlogPreviewElement from './blogPreviewElement';
import {BoxWrapper} from './blogPreviewBoxStyle';
const BlogPreviewBox = () => {
   
  const query = graphql`
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
    const articleBlogPrev = useStaticQuery(query);
  
    const {edges} = articleBlogPrev.allDatoCmsArticle;
    

    return ( 
        <BoxWrapper>
            {
              edges.map(el=>(
                <BlogPreviewElement
                  key={el.node.originalId}
                  title={el.node.title}
                  data={el.node.data}
                  paragraph={el.node.paragraph}/>
              ))
            }
        </BoxWrapper>
     );
}
 
export default BlogPreviewBox;