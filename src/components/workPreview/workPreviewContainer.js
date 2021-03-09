import React from 'react';
import {Container} from './workPreviewContainerStyle';
import ElementWork from './ElementWork';
import {graphql,useStaticQuery} from 'gatsby';

const WorkPreviewContainer = () => {

    const query = graphql`
    {
      allDatoCmsWorkArticle {
        edges {
          node {
            maintitle
            paragraph
            originalId
            image {
              fixed(width: 246, height: 180) {
                src
              }
            }
          }
        }
      }
    }
  `
    const articleWorkPrev = useStaticQuery(query);
  
    const {edges} = articleWorkPrev.allDatoCmsWorkArticle;
    


    return ( 
        <Container>
          {console.log(edges)}
            {
                   edges.map(el=>(
                       <ElementWork
                            title={el.node.maintitle}
                            paragraph={el.node.paragraph}
                            key={el.node.orginalId}
                            photo={el.node.image.fixed.src}
                       />
                   ))
            }
        </Container>
     );
}

export default WorkPreviewContainer;