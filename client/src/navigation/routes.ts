const singleCarPageRoot = '/car/';
const updateCarPageRoot = '/update-car/';

const staticRoutes = {
  HomePage: '/',
  CarFormPage: '/car-form',

};
const dynamicRoutes = {
  SingleCarPage: {
    path: `${singleCarPageRoot}:id`,
    createLink: (id: string | number) => `${singleCarPageRoot}${id}`,
  },
  UpdateCarPage: {
    path: `${updateCarPageRoot}:id`,
    createLink: (id: string | number) => `${updateCarPageRoot}${id}`,
  },
} as const;

const routes = {
  ...staticRoutes,
  ...dynamicRoutes,
} as const;

export type Routes = typeof staticRoutes;
export type RouteLink = Routes[keyof Routes];

export default routes;

// export type Routes = typeof routes;
// export type RouteLInk = {
//   [Key in keyof Routes]: Routes[Key] extends string ? Routes[Key] : never }[keyof Routes];
// export default routes;
