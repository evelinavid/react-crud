import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5024',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

const fetchCars = async () => {
  const response = await api.get<CarModel[]>('/cars');
  return response.data;
};
const fetchCar = async (id:string | number) => {
  const response = await api.get<CarModel>(`/cars/${id}`);
  return response.data;
};

const createCar = async (carData: Omit<CarModel, 'id'>) => {
  const response = await api.post('/cars', carData);
  return response.data;
};

const deleteCar = async (id:string | number) => {
  const response = await api.delete(`/cars/${id}`);
  return response.data;
};

const updateCar = async (id: string | number, carData: Omit<CarModel, 'id'>) => {
  const response = await api.patch(`/cars/${id}`, carData);
  return response.data;
};

const ApiService = {
  fetchCars,
  fetchCar,
  createCar,
  updateCar,
  deleteCar,
};

export default ApiService;
