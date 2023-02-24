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
import { getModeData } from './data';

const CarFormPage = () => {
  const { id } = useParams();
  const formRef = React.useRef<undefined | HTMLFormElement>(undefined);
  const navigate = useNavigate();
  const [car, loadingCarData] = useCar(id);
  const mode = id !== undefined ? 'edit' : 'create';
  const {
    title,
    btnText,
    color,
    colorMain,
  } = getModeData(mode);

  const handleSubmit = async (event:React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (formRef.current === null) return;

    try {
      const values = getCarFormValues(formRef.current);
      if (mode === 'create') {
        await ApiService.createCar(values);
        navigate(routes.HomePage);
      } else if (id !== undefined) {
        await ApiService.updateCar(id, values);
        navigate(-1);
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert('neteisingi duomenys');
      }
    }
  };

  if (loadingCarData) return null;

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
            <DirectionsCarFilledOutlinedIcon color={color} sx={{ fontSize: 60 }} />
          </Box>
          <Typography variant="h5" color={colorMain} sx={{ textAlign: 'center' }}>{title}</Typography>
          <TextField
            name="brand"
            label="Brand"
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={car?.brand}
          />
          <Box sx={{ display: 'flex', width: 1, gap: 2 }}>
            <TextField
              name="model"
              label="Model"
              fullWidth
              variant="filled"
              size="small"
              color={color}
              defaultValue={car?.model}

            />
            {' '}
            <TextField
              label="Year"
              name="year"
              fullWidth
              variant="filled"
              size="small"
              color={color}
              defaultValue={car?.year}

            />
          </Box>
          <FeaturesField
            color={color}
            defaultBackupCamera={car?.features.BackupCamera}
            defaultHeatedSeats={car?.features.HeatedSeats}
            defaulSunroofMoonroof={car?.features.SunroofMoonroof}
            defaulNavigationSystem={car?.features.NavigationSystem}
          />
          <ImageField color={color} colorMain={colorMain} defaultImages={car?.images} />

          <TextField
            label="Price"
            name="price"
            type="number"
            inputProps={{ step: '0.01' }}
            fullWidth
            variant="filled"
            size="small"
            color={color}
            defaultValue={car?.price}

          />
          <Button
            variant="contained"
            color={color}
            size="large"
            type="submit"
          >
            {btnText}

          </Button>
        </Stack>
      </Paper>
    </Stack>
  );
};

export default CarFormPage;
