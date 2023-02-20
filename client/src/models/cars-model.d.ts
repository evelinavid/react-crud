type CarModel = {
  id: number,
  brand: string,
  model: string,
  features: {
    SunroofMoonroof: boolean,
    HeatedSeats: boolean,
    BackupCamera: boolean,
    NavigationSystem: boolean
  },
  images: string[],
  price: number,
  year: number
};
