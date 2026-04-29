import styled from 'styled-components';

export const Header = styled.header`
    background-color: #1a1a2e;
    padding: 0 40px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 100;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.4);
`;

export const Logo = styled.span`
    color: #e94560;
    font-size: 22px;
    font-weight: 700;
    letter-spacing: 1px;

    span {
        color: #fff;
    }
`;

export const Nav = styled.nav`
    display: flex;
    gap: 32px;
    align-items: center;
`;

export const NavLink = styled.a`
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
    transition: color 0.2s;

    &:hover {
        color: #e94560;
    }
`;

export const NavButton = styled.a`
    background-color: #e94560;
    color: #fff;
    padding: 8px 20px;
    border-radius: 6px;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: background-color 0.2s;

    &:hover {
        background-color: #c73652;
    }
`;
