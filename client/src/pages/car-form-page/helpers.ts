const isStringArr = (
  arr: Array<unknown | string>,
) : arr is string[] => arr.every((str) => typeof str === 'string');

export const getCarFormValues = (form:HTMLFormElement | undefined): Omit<CarModel, 'id'> => {
  const formData = new FormData(form);
  const brand = formData.get('brand');
  if (typeof brand !== 'string') throw new Error('Missing brand');
  if (brand.length < 2) throw new Error('Brand must have at least 2 symbols');

  const model = formData.get('model');
  if (typeof model !== 'string') throw new Error('Missing model');
  if (model.length < 2) throw new Error('Model must have at least 2 symbols');

  const year = formData.get('year');
  if (typeof year !== 'string') throw new Error('Missing year');
  if (year.length < 3) throw new Error('Year must have at least 2 symbols');

  const price = formData.get('price');
  if (typeof price !== 'string') throw new Error('Missing year');
  if (price.length < 3) throw new Error('Year must have at least 2 symbols');

  const images = formData.getAll('images').filter((x) => x !== '');
  if (!isStringArr(images)) throw new Error('All images must be strings');

  const SunroofMoonroof = formData.get('backupCamera');

  const HeatedSeats = formData.get('heatedSeats');

  const BackupCamera = formData.get('sunroofMoonroof');

  const NavigationSystem = formData.get('navigationSystem');

  const values = {
    brand,
    model,
    year: Number(year),
    price,
    features: {
      SunroofMoonroof: Boolean(SunroofMoonroof),
      HeatedSeats: Boolean(HeatedSeats),
      BackupCamera: Boolean(BackupCamera),
      NavigationSystem: Boolean(NavigationSystem),
    },
    images: images.filter((img) => img !== ''),
  };
  return values;
};
