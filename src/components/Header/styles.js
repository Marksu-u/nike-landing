import styled from "styled-components";

export const HeaderContainer = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 36px;
    height: 60px;
    background: white;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
`;

export const TopNav = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    font-size: 12px;
    padding: 8px 36px;
    background: #f5f5f5;
`;

export const MainNav = styled.nav`
    display: flex;
    gap: 24px;
`;

export const NavLink = styled.a`
    text-decoration: none;
    color: #111;
    font-size: 16px;
    font-weight: 500;

    &:hover {
        color: #757575;
    }
`;

export const RightSection = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
`;

export const SearchContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
`;

export const SearchInput = styled.input`
    padding: 8px 48px 8px 16px;
    border-radius: 20px;
    border: none;
    background: #f5f5f5;
    width: 180px;

    &:focus {
        outline: none;
        background: #e5e5e5;
    }
`;
