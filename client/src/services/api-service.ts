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

const ApiService = {
  fetchCars,
};

export default ApiService;
