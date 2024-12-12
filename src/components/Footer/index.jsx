import React from 'react';
import { Facebook, Youtube, Instagram, Twitter} from 'react-feather';
import {
  FooterContainer,
  FooterContent,
  FooterColumn,
  FooterTitle,
  FooterLink,
  SocialIcons,
  SocialIcon,
  BottomBar,
  Copyright,
  LegalLinks,
  LegalLink,
} from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterColumn>
          <FooterTitle>FIND A STORE</FooterTitle>
          <FooterTitle>BECOME A MEMBER</FooterTitle>
          <FooterTitle>SIGN UP FOR EMAIL</FooterTitle>
          <FooterTitle>SEND US FEEDBACK</FooterTitle>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>GET HELP</FooterTitle>
          <FooterLink href="#">Order Status</FooterLink>
          <FooterLink href="#">Shipping and Delivery</FooterLink>
          <FooterLink href="#">Returns</FooterLink>
          <FooterLink href="#">Payment Options</FooterLink>
          <FooterLink href="#">Contact Us</FooterLink>
        </FooterColumn>
        <FooterColumn>
          <FooterTitle>ABOUT NIKE</FooterTitle>
          <FooterLink href="#">News</FooterLink>
          <FooterLink href="#">Careers</FooterLink>
          <FooterLink href="#">Investors</FooterLink>
          <FooterLink href="#">Purpose</FooterLink>
          <FooterLink href="#">Sustainability</FooterLink>
        </FooterColumn>
      </FooterContent>
      <SocialIcons>
        <SocialIcon href="#"><Twitter /></SocialIcon>
        <SocialIcon href="#"><Facebook /></SocialIcon>
        <SocialIcon href="#"><Youtube /></SocialIcon>
        <SocialIcon href="#"><Instagram /></SocialIcon>
      </SocialIcons>
      <BottomBar>
        <Copyright>© 2023 Nike, Inc. All Rights Reserved</Copyright>
        <LegalLinks>
          <LegalLink href="#">Guides</LegalLink>
          <LegalLink href="#">Terms of Sale</LegalLink>
          <LegalLink href="#">Terms of Use</LegalLink>
          <LegalLink href="#">Privacy Policy</LegalLink>
        </LegalLinks>
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;

