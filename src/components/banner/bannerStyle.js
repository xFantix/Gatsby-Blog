import styled from 'styled-components';
import {Link} from 'gatsby';
export const BannerWrapper = styled.div`
    width:100%;
    display:flex;
    padding: 140px 148px 70px  148px;
    justify-content:space-around;
    font-family:"Heebo";
    @media(max-width:1040px){
        flex-direction:column-reverse;
        align-items:center;
    }
`
export const DescriptionWrapper = styled.div`
     @media(max-width:1040px){
        display:flex;
        flex-direction:column;
        align-items:center;
    }
`
export const DescriptionHeader = styled.h1`
     font-weight:700;
     font-size:44px;
     line-height:60px;
     color: #21243D;
     @media(max-width:1040px){
       text-align:center;
    }
    @media(max-width:600px){
       font-size:32px;
       line-height: 40px;
    }
`
export const DescriptionParagraph = styled.p`
    font-size: 16px;
    line-height: 23px;
    font-weight:400;
    max-width:500px;
    margin-top:40px;
    color: #21243D;
    @media(max-width:1040px){
        text-align:center;
    }
    @media(max-width:600px){
        font-size: 16px;
    }
`
export const PhotoContainer = styled.div`
    width:243px;
    height:243px;
    background: #EDF7FA;
    border-radius:50%;
    position: relative;
    @media(max-width:1040px){
        margin-bottom:34px;
    }
`
export const Photo = styled.div`
    position:absolute;
    background-image:url(${({image})=>image});
    width:243px;
    height:243px;
    bottom:13px;
    left:4px;
`
export const Button = styled.button`
    background: #FF6464;
    color:white;
    margin-top:38px;
    border:none;
    width:207px;
    height:47px;
    font-weight:500;
    font-size:20px;
    font-family:"Heebo";
    border-radius:2px;
    text-decoration:none;
`
export const ButtonLink = styled(Link)`
    text-decoration:none;
`