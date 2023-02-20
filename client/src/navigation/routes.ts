const routes = {
  HomePage: '/',
  } as const;
export type Routes = typeof routes;
export type RouteLInk = Routes[keyof Routes];
export default routes;
