import React from 'react';
import { MenuItem } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { styled } from '@mui/system';

const Link = styled(NavLink)< { indent: number }>(({ theme, indent }) => ({
  alignSelf: 'stretch',
  flexGrow: 1,
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.common.black,
  padding: theme.spacing(0, 0, 0, indent),
  '&.active': {
    color: theme.palette.secondary.main,
    fontWeight: '600',
  },
}));

type NavbaMobileLinkProps = {
  to:string,
  children:React.ReactNode,
  onClick:VoidFunction,
  indent?:number
};

const NavbaMobileLink:React.FC<NavbaMobileLinkProps> = ({
  to,
  children,
  onClick,
  indent = 2,
}) => (
  <MenuItem sx={{ p: 0 }} key={to} onClick={onClick}>
    <Link to={to} indent={indent}>
      {children}
    </Link>
  </MenuItem>
);

export default NavbaMobileLink;
