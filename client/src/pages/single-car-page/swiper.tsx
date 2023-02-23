import React from 'react';
import Img from 'components/ui/img';
import { Navigation } from 'swiper';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Box, Stack, IconButton } from '@mui/material';
import { SingleCarPageImg } from './styles';

type ImageSwiperProps = {
  images: string[],
};

const ImageSwiper: React.FC<ImageSwiperProps> = ({ images }) => {
  const leftArrowRef = React.useRef<HTMLButtonElement | null>(null);
  const rightArrowRef = React.useRef<HTMLButtonElement | null>(null);
  return (
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
        {images.map((img) => (
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
  );
};

export default ImageSwiper;
