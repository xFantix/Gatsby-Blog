import React from 'react';
import {Wrapper,Hedder,DataText,Paragraph} from './blogListStyle';
const BlogList = ({ title,paragraph,data}) => {
    return ( 
        <Wrapper>
            <Hedder>{title}</Hedder>
            <DataText>{data}</DataText>
            <Paragraph>{paragraph}</Paragraph>
        </Wrapper>
     );
}
 
export default BlogList;