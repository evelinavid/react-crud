type CarModel = {
  id: string,
  brand: string,
  model: string,
  features: {
    SunroofMoonroof?: boolean,
    HeatedSeats?: boolean,
    BackupCamera?: boolean,
    NavigationSystem?: boolean
  },
  images: string[],
  price: string,
  year: number
};
