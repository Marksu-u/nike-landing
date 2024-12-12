import styled from "styled-components";

export const HeroContainer = styled.div`
    position: relative;
    height: 100vh;
    width: 100%;
    overflow: hidden;
`;

export const HeroImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    position: absolute;
    bottom: 120px;
    left: 0;
    right: 0;
    text-align: center;
    color: #111;
`;

export const HeroTitle = styled.h1`
    font-size: 72px;
    font-weight: 900;
    margin-bottom: 24px;
    letter-spacing: -2px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.8);
`;

export const HeroSubtitle = styled.p`
    font-size: 16px;
    margin-bottom: 32px;
    text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
`;

export const ShopButton = styled.button`
    background: #111;
    color: white;
    border: none;
    padding: 18px 24px;
    border-radius: 30px;
    font-size: 16px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
        background: #757575;
    }
`;

export const GiveSport = styled.div`
    position: absolute;
    left: 36px;
    bottom: 36px;
    font-size: 24px;
    font-weight: 500;
    color: white;
`;

export const NikeLogo = styled.img`
    position: absolute;
    right: 36px;
    bottom: 36px;
    width: 60px;
    height: 24px;
`;
