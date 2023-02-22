import Img from 'components/ui/img';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import {
  CarsCardStyle, H1Style, H4Style, H3Style, H2Style,
} from './styles';
import routes from '../navigation/routes';

type CarCardProps = CarModel;

const CarCard: React.FC<CarCardProps> = ({
  id,
  brand,
  model,
  images,
  price,
  year,
}) => {
  const navigate = useNavigate();
  return (
    <Stack spacing={2}>
      <Box sx={CarsCardStyle} onClick={() => navigate(routes.SingleCarPage.createLink(id))}>
        <Box sx={{ bgcolor: 'common.black' }}>
          <Img src={images[0]} alt="car-pic" sx={{ width: 1, height: '200px' }} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>

          <Box sx={{ margin: 0, marginLeft: '0.5rem' }}>
            <H1Style>
              {brand}
              {' '}
              {model}
              {' '}
              {year}
            </H1Style>
            <Typography sx={{
              textAlign: 'center',
              paddingBottom: 2,
            }}
            >
              Click to know what features it has

            </Typography>
            <Box sx={{
              display: 'flex', width: 1, height: 45, alignItems: 'flex-end', justifyContent: 'center',
            }}
            >
              <Typography sx={H2Style} component="h2">
                Price:
                {' '}
                {price}
                €
              </Typography>
            </Box>

          </Box>
        </Box>
      </Box>
    </Stack>
  );
};

export default CarCard;
