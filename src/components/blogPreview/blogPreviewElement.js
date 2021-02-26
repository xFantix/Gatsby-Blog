import React from 'react';
import {Wrapper,Header,Data,Description} from './blogPreviewElementStyle';
const BlogPreviewElement = ({title,data,paragraph}) => {
    return ( 
        <Wrapper>
              <Header>{title}</Header>
              <Data>{data}</Data>
              <Description>{paragraph}</Description>
        </Wrapper>
     );
}
 
export default BlogPreviewElement;