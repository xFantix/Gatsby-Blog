import styled from 'styled-components';
import {Link} from 'gatsby';
export const FooterWrapper = styled.footer`
    display:flex;
    flex-direction:column;
    width:100%;
    margin-top:83px;
    justify-content:center;
    align-items:center;
`
export const IconWrapper = styled.div`
    display:flex;
    width:100%;
    padding-top:51px;
    justify-content:center;
`
export const LinkIcon = styled(Link)`
    color:21243D ;
    text-decoration:none;
    padding:0 15px;
    font-size:35px;
    text-overflow: ellipsis;
`
export const Text = styled.span`
    font-family:"Heebo";
    font-weight:400;
    font-size:14px;
    text-align:center;
    padding:0 15px;
    padding-top:26px;
`