import React from 'react';
import ApiService from 'services/api-service';

const useCar = (id:string | undefined) => {
  const [car, setCar] = React.useState<undefined | CarModel>(undefined);
  const [loading, setLoading] = React.useState<boolean>(id !== undefined);

  React.useEffect(() => {
    if (id !== undefined) {
      (async () => {
        const fetchedCar = await ApiService.fetchCar(id);

        setCar(fetchedCar);
        setLoading(false);
      })();
    }
  }, []);

  return [car, loading] as const;
};

export default useCar;
