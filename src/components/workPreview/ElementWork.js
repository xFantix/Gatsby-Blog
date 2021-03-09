import React from 'react'
import {Container,DescriptionContainer,Header,Paragrpah} from './ElementWorkStyle';
import Img from "gatsby-image";
const ElementWork = ({title,paragraph,photo}) => {
    return ( 
        <Container>
             <img alt="" src={photo} />
             <DescriptionContainer>
                <Header>{title}</Header>
                <Paragrpah>{paragraph}</Paragrpah>
             </DescriptionContainer>
        </Container>
     );
}
export default ElementWork;