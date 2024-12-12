import React from "react";
import {
    HeroContainer,
    HeroImage,
    HeroContent,
    HeroTitle,
    HeroSubtitle,
    ShopButton,
    GiveSport,
    NikeLogo,
} from "./styles";

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImage src="/hero-image.webp" alt="Nike sneakers and clothing" />
            <HeroContent>
                <HeroTitle>ENGINEERED FOR WARMTH</HeroTitle>
                <HeroSubtitle>
                    Give the gift of warmth with essentials like Nike Fleece,
                    pants, and more.
                </HeroSubtitle>
                <ShopButton>Shop Gifts</ShopButton>
            </HeroContent>
            <GiveSport>
                GIVE
                <br />
                SPORT
            </GiveSport>
            <NikeLogo src="/nike-2-logo.svg" alt="Nike" />
        </HeroContainer>
    );
};

export default Hero;
