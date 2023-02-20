import { styled } from '@mui/system';
import { NavLink } from 'react-router-dom';
import navbarDesktopItemSx from './sx';

const NavbarDesktopLink = styled(NavLink)(({ theme }) => navbarDesktopItemSx(theme));

export default NavbarDesktopLink;
