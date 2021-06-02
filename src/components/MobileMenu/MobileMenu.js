/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';

import { COLORS, QUERIES, WEIGHTS } from '../../constants';

import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const MobileMenu = ({ isOpen, onDismiss }) => {
  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-labelledby="menu-title">
        <VisuallyHidden>
          <h2 id="menu-title">Navigation menu</h2>
        </VisuallyHidden>
        <CloseButtonWrapper>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close"/>
            <VisuallyHidden>Dismiss menu</VisuallyHidden>
          </UnstyledButton>
        </CloseButtonWrapper>
        <Filler />
        <Navigation>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Navigation>
        <Footer>
          <FooterLink href="/terms">Terms and Conditions</FooterLink>
          <FooterLink href="/privacy">Privacy Policy</FooterLink>
          <FooterLink href="/contact">Contact Us</FooterLink>
        </Footer>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
  background: hsl(220deg 6% 40% / 80%);
`;

const Content = styled(DialogContent)`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: min(300px, 100vw - 75px);
  
  padding: 32px;
  
  background: ${COLORS.white};
  
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const CloseButtonWrapper = styled.div`
  position: absolute;
  top: 26px;
  right: 16px;
`;

const Filler = styled.div`
  flex: 1;
`;

const Navigation = styled.nav`
  flex: 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
  }
`;

const Footer = styled.footer`
  flex: 1;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 8px;
`;

const FooterLink = styled.a`
  font-size: 0.875rem;
  text-decoration: none;
  color: ${COLORS.gray[700]};
  font-weight: ${WEIGHTS.normal};
`;

export default MobileMenu;
