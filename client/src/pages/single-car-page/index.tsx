import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box, Typography, Container, Button,
} from '@mui/material';
import ApiService from '../../services/api-service';
import routes from '../../navigation/routes';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  H4Style,
  H2Style,

} from '../styles';
import {
  SingleCarPageStyle,
  SingleCarPageTextContainerStyle,
  SingleCarPageButtons,
} from './styles';
import ImageSwiper from './swiper';

const SingleCarPage: React.FC = () => {
  const { id } = useParams();
  const [car, setCar] = React.useState<undefined | CarModel>(undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedCar = await ApiService.fetchCar(id);

        setCar(fetchedCar);
      })();
    }
  }, []);
  if (id === undefined) return <Navigate to={routes.HomePage} />;
  if (car === undefined) return null;

  return (
    <Container>

      <Box sx={SingleCarPageStyle}>
        <ImageSwiper images={car.images} />
        <Box sx={SingleCarPageTextContainerStyle}>
          <Typography
            sx={{
              color: 'secondary',
              fontWeight: 800,
              fontSize: '2rem',
              textAlign: 'center',
              letterSpacing: 3,
              paddingBottom: 2,
            }}
            component="h1"
          >
            {car.brand}
            {' '}
            {car.model}
            {', '}
            {car.year}
          </Typography>
          <Box sx={{ textAlign: 'start' }}>
            <Typography
              sx={{
                fontSize: 20,
                fontWeight: 600,
                paddingBottom: 2,
              }}
            >
              Features:
            </Typography>
            <Typography sx={H4Style} component="h4">
              Backup camera:
              {' '}
              {car.features.BackupCamera
                ? 'Yes'
                : 'No'}
            </Typography>
            <Typography sx={H4Style} component="h4">
              Heated seats:
              {' '}
              {car.features.HeatedSeats
                ? 'Yes'
                : 'No'}
            </Typography>
            <Typography sx={H4Style} component="h4">
              Navigation system:
              {' '}
              {car.features.NavigationSystem
                ? 'Yes'
                : 'No'}
            </Typography>
            <Typography sx={H4Style} component="h4">
              Sunroof / Moonroof:
              {' '}
              {car.features.SunroofMoonroof
                ? 'Yes'
                : 'No'}
            </Typography>
          </Box>
          <Typography sx={H2Style}>
            Price:
            {' '}
            {car.price}
            {' '}
            €
          </Typography>
          <Box sx={SingleCarPageButtons}>
            <Button sx={{ flexGrow: 1 }} variant="contained" color="secondary">Contact</Button>
            <Button variant="outlined" color="secondary"> Add to favourites</Button>

          </Box>
        </Box>

      </Box>
    </Container>
  );
};

export default SingleCarPage;
