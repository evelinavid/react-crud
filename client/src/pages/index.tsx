import React from 'react';
import { Box } from '@mui/material';
import ApiService from '../services/api-service';
import { CarsGridStyles } from './styles';
import CarCard from './car-card';

const HomePage = () => {
  const [cars, setCars] = React.useState<CarModel[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCars = await ApiService.fetchCars();
      setCars(fetchedCars);
    })();
  }, []);

  return (
      <Box sx={ CarsGridStyles }>
        {cars.map((car) => (<CarCard key={car.id} {...car} />))}
      </Box>
  );
};

export default HomePage;
