import {
  Box, Popper, Paper, MenuList,
} from '@mui/material';
import React from 'react';
import { useLocation } from 'react-router-dom';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import { LinksGroup } from '../links-data';
import navbarDesktopItemSx from './sx';
import NavbaDesktopDropdownLink from './navbar-desktop-dropdown-link';

type NavbarDesktopDropdownProps = LinksGroup & {
  open:boolean,
  onClick:VoidFunction
};

const NavbarDesktopDropdown: React.FC<NavbarDesktopDropdownProps> = ({
  title,
  links,
  open,
  onClick,
}) => {
  const { pathname } = useLocation();
  const isActive = links.some(({ to }) => to === pathname);
  const ref = React.useRef<HTMLDivElement | null>(null);
  const Icon = open ? ArrowDropUpIcon : ArrowDropDownIcon;

  return (

    <Box
      sx={[navbarDesktopItemSx, { userSelect: 'none', pr: 0 }]}
      className={isActive ? 'active' : undefined}
      ref={ref}
      onClick={onClick}
    >
      {title}
      <Icon fontSize="large" />
      <Popper
        open={open}
        anchorEl={ref.current}
        placement="bottom-end"
        sx={{ zIndex: 'modal' }}
      >
        <Paper sx={{ width: 200 }} elevation={4}>
          <MenuList>
            {links.map(({ text, to }) => (
              <NavbaDesktopDropdownLink key={to} to={to}>
                {text}
              </NavbaDesktopDropdownLink>
            ))}

          </MenuList>

        </Paper>
      </Popper>
    </Box>
  );
};

export default NavbarDesktopDropdown;
