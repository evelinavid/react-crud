import Img from 'components/ui/img';
import React from 'react';
import {
  Box, Typography, Stack, Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
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
    <Stack spacing={2} sx={{ position: 'relative' }}>
      <Box sx={{
        position: 'absolute',
        top: 30,
        left: 15,
        display: 'flex',
        gap: 0.5,
      }}
      >
        <Button
          variant="contained"
          color="info"
          size="small"
          sx={{
            minWidth: 'initial',
            p: 0.5,
          }}
          onClick={() => console.log('gaunama uzklausa')}
        >
          <DeleteIcon />
        </Button>
        <Button
          variant="contained"
          color="warning"
          size="small"
          sx={{
            minWidth: 'initial',
            p: 0.5,
          }}
          onClick={() => navigate(routes.UpdateCarPage.createLink(id))}
        >
          <EditIcon />
        </Button>
      </Box>
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
