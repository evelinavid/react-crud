import React from 'react';
import {
  Drawer, Toolbar, MenuList, type AccordionProps,
} from '@mui/material';
import { useLocation } from 'react-router-dom';
import NavbarMobileLink from './navbar-mobile-link';
import { mainLinks, extendBr, linksGroups } from '../links-data';
import NavbarMobileMenuAccordion from './navbar-mobile-menu-accordion';

type NavbaMobileMenuProps = {
  openDrawer:boolean,
  closeDrawer: VoidFunction
};

const NavbarMobileMenu:React.FC<NavbaMobileMenuProps> = ({ openDrawer, closeDrawer }) => {
  const { pathname } = useLocation();
  let initValue: boolean | string = false;
  linksGroups.forEach(({ title, links }) => {
    const isActiveLink = links.some(({ to }) => to === pathname);
    if (isActiveLink) {
      initValue = title;
    }
  });

  const [expanded, setExpanded] = React.useState<string | false>(initValue);

  const handleAccordionExpansionChange = (title:string):AccordionProps['onChange'] => (
    event,
    newValue,
  ) => {
    if (newValue) {
      setExpanded(title);
    } else {
      setExpanded(false);
    }
  };

  const handleMainLinkClick = () => {
    closeDrawer();
    setExpanded(false);
  };

  return (
    <Drawer
      sx={{ display: { xs: 'block', [extendBr]: 'none' } }}
      anchor="top"
      open={openDrawer}
      onClose={closeDrawer}
    >
      <Toolbar />
      <MenuList>
        {mainLinks.map(({ to, text }) => (
          <NavbarMobileLink key={to} to={to} onClick={handleMainLinkClick}>{text}</NavbarMobileLink>
        ))}
        {linksGroups.map(({ title, links }) => (
          <NavbarMobileMenuAccordion
            key={title}
            title={title}
            links={links}
            closeDrawer={closeDrawer}
            expanded={title === expanded}
            isActiveLink={initValue === title}
            onChange={handleAccordionExpansionChange(title)}
          />
        ))}
      </MenuList>
    </Drawer>
  );
};

export default NavbarMobileMenu;
