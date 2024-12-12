import React from "react";
import { Search, Heart, ShoppingBag } from "react-feather";
import {
    HeaderContainer,
    TopNav,
    MainNav,
    NavLink,
    RightSection,
    SearchContainer,
    SearchInput,
} from "./styles";

const Header = () => {
    return (
        <>
            <TopNav>
                <img src="/jordan.svg" alt="Jordan" width="24" height="24" />
                <a href="/stores">Find a Store</a>
                <span>|</span>
                <a href="/help">Help</a>
                <span>|</span>
                <a href="/join">Join Us</a>
                <span>|</span>
                <a href="/signin">Sign In</a>
            </TopNav>
            <HeaderContainer>
                <img src="/nike-logo.svg" alt="Nike" width="60" height="24" />

                <MainNav>
                    <NavLink href="/new">New</NavLink>
                    <NavLink href="/men">Men</NavLink>
                    <NavLink href="/women">Women</NavLink>
                    <NavLink href="/kids">Kids</NavLink>
                    <NavLink href="/jordan">Jordan</NavLink>
                    <NavLink href="/sale">Sale</NavLink>
                </MainNav>

                <RightSection>
                    <SearchContainer>
                        <SearchInput placeholder="Search" />
                        <Search
                            size={20}
                            style={{
                                position: "absolute",
                                right: "12px",
                                color: "#757575",
                            }}
                        />
                    </SearchContainer>
                    <Heart size={24} />
                    <ShoppingBag size={24} />
                </RightSection>
            </HeaderContainer>
        </>
    );
};

export default Header;
