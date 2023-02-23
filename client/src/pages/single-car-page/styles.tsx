import { Theme } from '@mui/material';

export const SingleCarPageStyle = (theme: Theme) => ({
  border: 'dashed 1px',
  margin: 'auto',
  [theme.breakpoints.up('sm')]: {
    display: 'block',
  },
  [theme.breakpoints.up('md')]: {
    alignItems: 'center',
    display: 'flex',
    gap: '1rem',
  },

});

export const SingleCarPageImg = (theme: Theme) => ({
  width: 1,
  height: 300,
  bgcolor: 'common.black',
  [theme.breakpoints.up('md')]: {
    maxWidth: 600,
  },
});
export const SingleCarPageButtons = (theme: Theme) => ({
  py: 3,
  display: 'flex',
  gap: 3,
  flexDirection: 'column',

  [theme.breakpoints.up('md')]: {
    flexDirection: 'row',
  },
});

export const SingleCarPageTextContainerStyle = (theme: Theme) => ({
  margin: 'auto',
  textAlign: 'center',
  width: 1,
  height: 500,
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
});
