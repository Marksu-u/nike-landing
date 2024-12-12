import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color: #111;
  color: #fff;
  padding: 40px 48px;
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FooterTitle = styled.h4`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 16px;
`;

export const FooterLink = styled.a`
  color: #7e7e7e;
  font-size: 12px;
  margin-bottom: 8px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

export const SocialIcons = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 24px;
`;

export const SocialIcon = styled.a`
  color: #7e7e7e;
  font-size: 24px;

  &:hover {
    color: #fff;
  }
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #222;
`;

export const Copyright = styled.p`
  color: #7e7e7e;
  font-size: 12px;
`;

export const LegalLinks = styled.div`
  display: flex;
  gap: 16px;
`;

export const LegalLink = styled.a`
  color: #7e7e7e;
  font-size: 12px;
  text-decoration: none;

  &:hover {
    color: #fff;
  }
`;

