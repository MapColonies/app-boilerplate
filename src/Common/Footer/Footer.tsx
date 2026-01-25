import React from 'react';
import { Box } from '@map-colonies/react-components';
import { IconButton } from '@map-colonies/react-core';

import './Footer.css';

const Footer: React.FC = (): JSX.Element => {
  return (
    <Box className="Footer">
      <IconButton className="icon mc-icon-Next" onClick={(e): void => { e.preventDefault(); e.stopPropagation(); }} />
      <IconButton className="icon mc-icon-Back" onClick={(e): void => { e.preventDefault(); e.stopPropagation(); }} />
    </Box>
  );
};

export default Footer;
