import { styled, MenuItem } from '@mui/material';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Link = styled(NavLink)(({ theme }) => ({
  flexGrow: 1,
  textDecoration: 'none',
  color: theme.palette.common.black,
  padding: theme.spacing(0.5, 2),
  '&.active': {
    boxShadow: `inset 4px 0 0 ${theme.palette.secondary.main}`,
  },
}));

type NavbarDesktopDropdownLinkProps = {
  to:string,
  children:React.ReactNode
};
const NavbaDesktopDropdownLink:React.FC<NavbarDesktopDropdownLinkProps> = ({
  to,
  children,
}) => (
  <MenuItem><Link to={to}>{children}</Link></MenuItem>

);

export default NavbaDesktopDropdownLink;
