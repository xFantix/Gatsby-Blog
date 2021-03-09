import React from 'react';
import {BannerWrapper,DescriptionWrapper,DescriptionHeader,DescriptionParagraph,PhotoContainer,Photo,Button,ButtonLink} from './bannerStyle';
import {graphql,useStaticQuery} from 'gatsby';
const Banner = () => {
    const query = graphql`
    {
      file(name: {eq: "avatar1"}) {
        childImageSharp {
          fluid(maxWidth: 243, maxHeight: 243, quality: 100) {
            src
          }
        }
      }
    }
    `
    const photo = useStaticQuery(query);
    return ( 
        <BannerWrapper>
            <DescriptionWrapper>
                <DescriptionHeader>Hi, I am John,</DescriptionHeader>
                <DescriptionHeader>Creative Technologist</DescriptionHeader>
                    <DescriptionParagraph>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
                        sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    </DescriptionParagraph>
                    <ButtonLink to='/blog'>
                        <Button>Go To Blog</Button>
                    </ButtonLink>
            </DescriptionWrapper>
            <PhotoContainer>
                <Photo image={photo.file.childImageSharp.fluid.src}>
                  {console.log(photo.file.childImageSharp.fluid.src)}
                </Photo>
            </PhotoContainer>
        </BannerWrapper>
     );
}
 
export default Banner;