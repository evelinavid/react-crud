import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import {
  Box, IconButton, Typography, Container,
} from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import Img from 'components/ui/img';
import { Navigation } from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Stack from '@mui/system/Stack';
import { letterSpacing } from '@mui/system';
import ApiService from '../../services/api-service';
import routes from '../../navigation/routes';
import 'swiper/css';
import 'swiper/css/navigation';
import {
  H4Style,
  H2Style,
  SingleCarPageStyle,
  SingleCarPageImg,
  SingleCarPageButtons,
  SingleCarPageTextContainerStyle,
} from '../styles';
import Button from '@mui/material/Button';

const SingleCarPage: React.FC = () => {
  const leftArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = React.useRef<HTMLButtonElement | null>(null);
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
        <Box sx={SingleCarPageImg}>
          <Swiper
            modules={[Navigation]}
            navigation={{
              enabled: true,
              nextEl: rightArrowRef.current,
              prevEl: leftArrowRef.current,
            }}
            style={{ height: '100%' }}
          >
            {car.images.map((img) => (
              <SwiperSlide>
                <Img src={img} sx={{ height: 1, width: 1 }} />
              </SwiperSlide>
            ))}
            <Stack sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              left: 0,
              zIndex: 3000,
              justifyContent: 'center',
            }}
            >
              <IconButton ref={leftArrowRef}>
                <ArrowBackIcon sx={{
                  color: 'secondary.main',
                  fontSize: 30,
                }}
                />
              </IconButton>
            </Stack>
            <Stack sx={{
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              zIndex: 3000,
              justifyContent: 'center',
            }}
            >
              <IconButton ref={rightArrowRef}>
                <ArrowForwardIcon sx={{
                  color: 'secondary.main',
                  fontSize: 30,
                }}
                />
              </IconButton>
            </Stack>
          </Swiper>
        </Box>
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
