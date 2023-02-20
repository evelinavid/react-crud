import React from 'react';
import { IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { extendBr } from './links-data';

type NavbarTogglerProps = {
  openDrawer:boolean,
  togglerDrawer: VoidFunction
};

const NavbarToggler:React.FC<NavbarTogglerProps> = ({ openDrawer, togglerDrawer }) => {
  const Icon = openDrawer ? CloseIcon : MenuIcon;

  return (
    <IconButton
      sx={{ display: { xs: 'inline-grid', [extendBr]: 'none' } }}
      onClick={togglerDrawer}
    >

      <Icon sx={{ color: 'common.while', fontSize: 32 }} />

    </IconButton>
  );
};

export default NavbarToggler;
