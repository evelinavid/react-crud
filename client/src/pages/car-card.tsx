import Img from 'components/ui/img';
import React from 'react';
import { Box, Typography } from '@mui/material';
import { CarsCardStyle, H1Style, H4Style, H3Style, H2Style } from './styles';

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
      <Box sx={{ backgroundColor: 'palette.common.black' }}>
        <Img src={images[0]} alt="car-pic" />
      </Box>
      <Box sx={{ margin: 0, marginLeft: '0.5rem' }}>
        <Typography sx={H1Style}>
          {id}
          {'. '}
          {brand}
          {' '}
          {model}
        </Typography>
        <Typography sx={H4Style}>
          Backup camera:
          {' '}
          {features.BackupCamera
            ? <i className="bi bi-x-lg" />
            : <i className="bi bi-check-lg" />}
        </Typography>
        <Typography sx={H4Style}>
          Heated seats:
          {' '}
          {features.HeatedSeats
            ? <i className="bi bi-x-lg" />
            : <i className="bi bi-check-lg" />}
        </Typography>
        <Typography sx={H4Style}>
          Navigation system:
          {' '}
          {features.NavigationSystem
            ? <i className="bi bi-x-lg" />
            : <i className="bi bi-check-lg" />}
        </Typography>
        <Typography sx={H4Style}>
          Sunroof / Moonroof:
          {' '}
          {features.SunroofMoonroof
            ? <i className="bi bi-x-lg" />
            : <i className="bi bi-check-lg" />}
        </Typography>

        <Typography sx={H3Style}>
          Year:
          {' '}
          {year}
        </Typography>
        <Typography sx={H2Style}>
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
