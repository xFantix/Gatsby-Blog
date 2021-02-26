import React from 'react';
import {FooterWrapper,IconWrapper,LinkIcon,Text } from './styleFooter';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare,faInstagram,faTwitter,faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
    return ( 
        <FooterWrapper>
            <IconWrapper>
                <LinkIcon to="/">
                    <FontAwesomeIcon icon={faFacebookSquare} color="#21243D" />
                </LinkIcon>
                <LinkIcon to="/">
                    <FontAwesomeIcon icon={faInstagram} color="#21243D" />
                </LinkIcon>
                <LinkIcon to="/">
                    <FontAwesomeIcon icon={faTwitter }  color="#21243D"/>
                </LinkIcon>
                <LinkIcon to="/">
                    <FontAwesomeIcon icon={faLinkedin } color="#21243D"/>
                </LinkIcon>
            </IconWrapper>
            <Text >Copyright ©2020 All rights reserved </Text>
        </FooterWrapper>
     );
}
 
export default Footer;