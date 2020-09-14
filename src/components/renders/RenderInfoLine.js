import React from 'react';

// STYLES
import { StyledInfoLine, StyledBoldedText, StyledInfoText } from '../../styled';

const RenderInfoLine = (boldedText, infoText) => {
  return (
    <StyledInfoLine>
      <StyledBoldedText>{boldedText}</StyledBoldedText>
      <StyledInfoText>{infoText}</StyledInfoText>
    </StyledInfoLine>
  );
};

export default RenderInfoLine;
