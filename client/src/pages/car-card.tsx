import Img from 'components/ui/img';
import React from 'react';
import { Box, Typography } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close';
import {
  CarsCardStyle, H1Style, H4Style, H3Style, H2Style,
} from './styles';

type CarCardProps = CarModel;

const CarCard: React.FC<CarCardProps> = ({
  id,
  brand,
  model,
  features,
  images,
  price,
  year,
}) => (
  <Box>
    <Box sx={CarsCardStyle}>
      <Box sx={{ bgcolor: 'common.black' }}>
        <Img src={images[0]} alt="car-pic" sx={{ width: 1, height: '200px' }} />
      </Box>
      <Box sx={{ margin: 0, marginLeft: '0.5rem' }}>
        <Typography sx={H1Style} component="h1">
          {id}
          {'. '}
          {brand}
          {' '}
          {model}
        </Typography>
        <Typography sx={H4Style} component="h4">
          Backup camera:
          {' '}
          {features.BackupCamera
            ? 'Yes'
            : 'No'}
        </Typography>
        <Typography sx={H4Style} component="h4">
          Heated seats:
          {' '}
          {features.HeatedSeats
            ? 'Yes'
            : 'No'}
        </Typography>
        <Typography sx={H4Style} component="h4">
          Navigation system:
          {' '}
          {features.NavigationSystem
            ? 'Yes'
            : 'No'}
        </Typography>
        <Typography sx={H4Style} component="h4">
          Sunroof / Moonroof:
          {' '}
          {features.SunroofMoonroof
            ? 'Yes'
            : 'No'}
        </Typography>

        <Typography sx={H3Style} component="h3">
          Year:
          {' '}
          {year}
        </Typography>
        <Typography sx={H2Style} component="h2">
          Price:
          {' '}
          {price}
          €
        </Typography>

      </Box>
    </Box>
  </Box>
);

export default CarCard;
