import React from 'react';
import { Box, ClickAwayListener, useMediaQuery } from '@mui/material';
import NavbarDesktopLink from './navbar-desktop-link';
import { mainLinks, extendBr, linksGroups } from '../links-data';
import NavbarDesktopDropdown from './navbar-desktop-dropdown';

const NavbarDesktopMenu = () => {
  const [activeMenuTitle, setActiveMenuTitle] = React.useState<string | false>(false);

  const handleToggleMenu = (title:string) => {
    if (activeMenuTitle === title) {
      setActiveMenuTitle(false);
    } else {
      setActiveMenuTitle(title);
    }
  };
  const isDesktop = useMediaQuery((theme: Theme) => theme.breakpoints.up(extendBr));
  return (
    <Box sx={{
      alignSelf: 'stretch',
      display: { xs: 'none', [extendBr]: 'flex' },
    }}
    >
      {mainLinks.map(({ to, text }) => (
        <NavbarDesktopLink key={to} to={to}>
          {text}
        </NavbarDesktopLink>
      ))}
      <ClickAwayListener onClickAway={() => setActiveMenuTitle(false)}>
        <Box sx={{ display: 'flex'}}>
          {linksGroups.map((linkGroup) => (
            <NavbarDesktopDropdown
              key={linkGroup.title}
              {...linkGroup}
              open={activeMenuTitle === linkGroup.title && isDesktop}
              onClick={() => handleToggleMenu(linkGroup.title)}
            />

          ))}
        </Box>
      </ClickAwayListener>
    </Box>
  );
};

export default NavbarDesktopMenu;
