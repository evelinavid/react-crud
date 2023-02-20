import React from 'react';
import {
  Accordion, AccordionSummary, AccordionDetails, Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { AccordionProps } from '@mui/material/Accordion';
import NavbarMobileLink from './navbar-mobile-link';
import { LinksGroup } from '../links-data';

type NavbarMobileMenuAccordionProps = LinksGroup & {
  closeDrawer: VoidFunction,
  onChange: AccordionProps['onChange'],
  expanded:boolean,
  isActiveLink:boolean,
};

const NavbarMobileMenuAccordion: React.FC<NavbarMobileMenuAccordionProps> = ({
  title,
  links,
  closeDrawer,
  expanded,
  onChange,
  isActiveLink,
}) => (
  <Accordion
    disableGutters
    square
    sx={{ boxShadow: 'none' }}
    defaultExpanded={isActiveLink}
    expanded={expanded}
    onChange={onChange}
  >
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      <Typography color={isActiveLink ? 'secondary' : 'inherit'}>
        {title}

      </Typography>
    </AccordionSummary>
    <AccordionDetails sx={{ p: 0 }}>
      {links.map(({ to, text }) => (
        <NavbarMobileLink
          key={to}
          to={to}
          onClick={closeDrawer}
          indent={4}
        >
          {text}
        </NavbarMobileLink>

      ))}

    </AccordionDetails>
  </Accordion>
);

export default NavbarMobileMenuAccordion;
