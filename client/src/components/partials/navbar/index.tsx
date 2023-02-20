import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import { extendBr } from './links-data';
import NavbarDesktopMenu from './navbar-desktop-menu/navbar-desktop-menu';
import NavbarMobileMenu from './navbar-mobile-menu/navbar-mobile-menu';
import NavbarToggler from './navbar-toggler';

const Navbar = () => {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  const closeDrawer = () => setOpenDrawer(false);
  const togglerDrawer = () => setOpenDrawer(!openDrawer);
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar sx={{ justifyContent: { xs: 'flex-end', [extendBr]: 'flex-start' } }}>
        <NavbarDesktopMenu />
        <NavbarToggler openDrawer={openDrawer} togglerDrawer={togglerDrawer} />
        <NavbarMobileMenu openDrawer={openDrawer} closeDrawer={closeDrawer} />
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
