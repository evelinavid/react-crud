import React from 'react';
import {
  Typography,
  Box,
  Paper,
  Stack,
  TextField,
  Button,
} from '@mui/material';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import { useNavigate, useParams } from 'react-router-dom';
import routes from 'navigation/routes';
import ApiService from 'services/api-service';
import FeaturesField from './features-field';
import ImageField from './image-field';
import { getCarFormValues } from './helpers';
import useCar from '../../hooks/use-car';

const CarFormPage = () => {
  const { id } = useParams();
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();
  const [car, loadingCarData] = useCar(id);

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = getCarFormValues(formRef.current);
      await ApiService.createCar(values);
      navigate(routes.HomePage);
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('neteisingi duomenys');
      }
    }
  };

  if (loadingCarData) return null;

  console.log('atnaujinami duomenys');
  console.log(car)

  return (
    <Stack sx={{
      py: { xs: 2, md: 4, xl: 6 },
      px: 2,
      alignItems: 'center',
    }}
    >
      <Paper
        elevation={6}
        sx={{
          p: 3,
          width: (theme) => ({ xs: 1, sm: theme.breakpoints.values.sm }),
        }}
      >
        <Stack
          component="form"
          sx={{ gap: 2 }}
          onSubmit={handleSubmit}
          ref={formRef}
        >
          <Box sx={{ textAlign: 'center' }}>
            <DirectionsCarFilledOutlinedIcon sx={{ fontSize: 60, color: 'secondary.main' }} />
          </Box>
          <Typography variant="h5" color="secondary" sx={{ textAlign: 'center' }}>Pridėkite naują automibilį</Typography>
          <TextField
            name="brand"
            label="Brand"
            fullWidth
            variant="filled"
            size="small"
          />
          <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
            <TextField
              name="model"
              label="Model"
              fullWidth
              variant="filled"
              size="small"
            />
            {' '}
            <TextField
              label="Year"
              name="year"
              fullWidth
              variant="filled"
              size="small"
            />
          </Box>
          <FeaturesField />
          <ImageField />

          <TextField
            label="Price"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            fullWidth
            variant="filled"
            size="small"
          />
          <Button
            variant="contained"
            color="secondary"
            size="large"
            type="submit"
          >
            Create

          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default CarFormPage;
