import React from 'react';
import { Box, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ApiService from '../services/api-service';
import { CarsGridStyles } from './styles';
import CarCard from './car-card';
import routes from '../navigation/routes';

const HomePage = () => {
  const [cars, setCars] = React.useState<CarModel[]>([]);
  const navigate = useNavigate();

  const fetchingCars = async () => {
    const fetchedCars = await ApiService.fetchCars();
    setCars(fetchedCars);
  };

  const handleDelete = async (id: number | string) => {
    await ApiService.deleteCar(id);
    fetchingCars();
  };

  React.useEffect(() => {
    (async () => {
      fetchingCars();
    })();
  }, []);

  return (
    <Container sx={{ mt: 2 }}>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() => navigate(routes.CarFormPage)}
      >
        Sukurti naują

      </Button>
      <Box sx={CarsGridStyles}>
        {cars.map((car) => (<CarCard key={car.id} onDelete={handleDelete} {...car} />))}
      </Box>
    </Container>
  );
};

export default HomePage;
