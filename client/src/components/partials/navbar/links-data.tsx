import { Breakpoint } from '@mui/system/createTheme';
import routes from 'navigation/routes';
import { RouteLInk } from '../../../navigation/routes';

export type Link = {
  to: RouteLInk,
  text:String
};

export type LinksGroup = {
  title:string,
  links:Link[]
};

export const mainLinks: Link[] = [
  { to: routes.HomePage, text: 'Home' },
  
];

export const linksGroups: LinksGroup[] = [];


export const extendBr: Breakpoint = 'sm';
