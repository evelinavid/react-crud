/* eslint-disable import/prefer-default-export */
import { Theme } from '@mui/material';

export const CarsGridStyles = (theme: Theme) => ({
  boxSizing: 'border-box',
  display: 'grid',
  justifyItems: 'stretch',
  gridTemplateRows: 'auto',
  gap: theme.spacing(2),
  padding: theme.spacing(2),
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
  [theme.breakpoints.up('lg')]: {
    gridTemplateColumns: 'repeat(4, 1fr)',
  },
}
);

export const CarsCardStyle = (theme: Theme) => ({
  boxSizing: 'border-box',
  width: 1,
  height: '400px',
  borderRadius: '1rem',
  border: 'solid 10px #ccc',
  background: theme.palette.common.white,
  '&:hover': {
    border: 'solid 10px #7c0707ea',
  },
});

export const H1Style = (theme:Theme) => ({
  boxSizing: 'border-box',
  fontSize: '25px',
  textAlign: 'center',
  [theme.breakpoints.up('sm')]: {
    fontSize: '20px',
  },
});

export const H2Style = () => ({
  boxSizing: 'border-box',
  textAlign: 'end',
  fontWeight: 600,
  paddingRight: '8px',
  textDecoration: 'underline',
});

export const H3Style = () => ({
  boxSizing: 'border-box',
  paddingTop: '8px',
  fontWeight: 400,
});

export const H4Style = (theme: Theme) => ({
  boxSizing: 'border-box',
  fontWeight: 300,
  color: theme.palette.common.black,
});