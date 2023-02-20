import React from 'react';
import { Typography, Box, Container } from '@mui/material';

const HomePage = () => (
  <Box sx={{ bgcolor: 'grey.200', height: '100vh' }}>

    <Container>
      <Box sx={{
        textAlign: 'center',
      }}
      >
        <Typography variant="h2">Projekto šablonas</Typography>

      </Box>
      <Box sx={{
        height: 400,
        margin: 10,
        bgcolor: 'grey.100',
        color: 'common.black',
        textAlign: 'center',
      }}
      >
        <Typography variant="h4">Atidarykite src faila</Typography>
        <Typography variant="body1">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni officiis accusantium unde nisi laudantium placeat perferendis quas, sequi exercitationem itaque?</Typography>
      </Box>
    </Container>
  </Box>

);

export default HomePage;
