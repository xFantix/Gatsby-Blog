import React from 'react';
import {graphql,useStaticQuery} from 'gatsby';
import BlogPreviewElement from './blogPreviewElement';
const BlogPreviewBox = () => {
   
  const query = graphql`
    {
        allDatoCmsArticle {
          edges {
            node {
              originalId
              title
              paragrap
            }
          }
        }
      }
    `
    const articleBlogPrev = useStaticQuery(query);
  
    const {edges} = articleBlogPrev.allDatoCmsArticle;
    
      

    return ( 
        <div>
            {
              edges.map(el=>(
                <BlogPreviewElement
                  key={el.node.originalId}
                  title={el.node.title}
                  paragpraph={el.node.paragpraph}/>
              ))
            }
        </div>
     );
}
 
export default BlogPreviewBox;