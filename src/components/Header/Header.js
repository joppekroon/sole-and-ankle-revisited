import React from 'react';
import styled from 'styled-components/macro';

import { QUERIES } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from '../VisuallyHidden';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileButtons>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} color={'var(--color-gray-900)'} size="24" />
            <VisuallyHidden>Open cart</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton>
            <Icon id="search" strokeWidth={2} color={'var(--color-gray-900)'} size="24" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>
          <UnstyledButton aria-haspopup="menu" onClick={() =>  setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} color={'var(--color-gray-900)'} size="24" />
            <VisuallyHidden>Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileButtons>
        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;
  
  @media ${QUERIES.tabletAndSmaller} {
    border-top: 4px solid var(--color-gray-900);
    align-items: center;
    justify-content: space-between;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
    padding: 18px 16px;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1.5rem,
    7vw - 2.75rem,
    3rem
  );
  
  margin: 0px 48px;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  
  @media ${QUERIES.tabletAndSmaller} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: none;
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const MobileButtons = styled.div`
  display: none;
  
  @media ${QUERIES.tabletAndSmaller} {
    display: flex;
    gap: 32px;
  }
  
  @media ${QUERIES.phoneAndSmaller} {
    gap: 16px;
  }
`;

export default Header;
