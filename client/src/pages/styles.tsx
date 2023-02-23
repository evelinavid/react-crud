/* eslint-disable import/prefer-default-export */
import { Theme, styled } from '@mui/material';

export const CarsGridStyles = (theme: Theme) => ({
  boxSizing: 'border-box',
  display: 'grid',
  justifyItems: 'stretch',
  gridTemplateRows: 'auto',
  gap: theme.spacing(2),
  py: 3,
  gridTemplateColumns: '1fr',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(2, 1fr)',
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: 'repeat(3, 1fr)',
  },
}
);

export const CarsCardStyle = (theme: Theme) => ({
  boxSizing: 'border-box',
  width: 1,
  height: '375px',
  borderRadius: '1rem',
  border: 'solid 10px #ccc',
  background: theme.palette.common.white,
  '&:hover': {
    border: 'solid 10px #7c0707ea',
  },
});

export const H1Style = styled('h2')(({ theme }) => ({
  boxSizing: 'border-box',
  fontSize: 24,
  padding: '5px 0',
  margin: 0,
  textAlign: 'center',
}));

export const H2Style = () => ({
  boxSizing: 'border-box',
  fontWeight: 600,
  paddingRight: '8px',
  textDecoration: 'underline',
  fontSize: 22,
});

export const H3Style = () => ({
  boxSizing: 'border-box',
  paddingTop: '8px',
  fontWeight: 400,
  fonstSize: 18,
});

export const H4Style = (theme: Theme) => ({
  boxSizing: 'border-box',
  fontWeight: 300,
  fontSize: 18,
  paddingBottom: 1.5,
  color: theme.palette.common.black,
});
