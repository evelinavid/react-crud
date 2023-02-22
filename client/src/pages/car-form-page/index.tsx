import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import FeaturesField from './features-field';
import ImageField from './image-field';

const CarFormPage = () => (
  <Stack sx={{
    py: { xs: 2, md: 4, xl: 6 },
    px: 2,
    alignItems: 'center',
  }}
  >
    <Paper
      component="form"
      elevation={6}
      sx={{
        p: 3,
        width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }),
      }}
    >
      <Stack sx={{ gap: 2 }}>
        <Box sx={{ textAlign: 'center' }}>
          <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
        </Box>
        <Typography variant="h5" color="secondary" sx={{ textAlign: 'center' }}>Pridėkite naują automibilį</Typography>
        <TextField
          label="Brand"
          fullWidth
          variant="filled"
          size="small"
        />
        <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
          <TextField
            label="Model"
            fullWidth
            variant="filled"
            size="small"
          />
          {' '}
          <TextField
            label="Year"
            fullWidth
            variant="filled"
            size="small"
          />
        </Box>
        <FeaturesField />
        <ImageField />

        <TextField
          label="Price"
          type="number"
          inputProps={{ step: '0.01' }}
          fullWidth
          variant="filled"
          size="small"
        />
        <Button variant="contained" color="secondary" size="large">Create</Button>
      </Stack>
    </Paper>
  </Stack>
);

export default CarFormPage;
