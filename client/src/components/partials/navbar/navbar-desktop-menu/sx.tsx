import { Theme } from '@mui/material';

const navbarDesktopItemSx = ((theme: Theme) => ({
  alignSelf: 'stretch',
  letterSpacing: '0.15rem',
  padding: theme.spacing(0, 2),
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: theme.palette.grey[200],
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: theme.palette.secondary.dark,
    color: theme.palette.common.white,
  },
  '&.active': {
    fontWeight: '600',
    fontSize: '20px',
    borderBottom: `4px solid ${theme.palette.secondary.light}`,
  },
}));
export default navbarDesktopItemSx;
// alignSelf: 'stretch',
// px: 2,
// textDecoration: 'none',
// color: 'grey.200',
// display: 'grid',
// placeItems: 'center',
