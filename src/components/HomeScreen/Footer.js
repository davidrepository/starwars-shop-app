import React from 'react';
import styled from 'styled-components';

// Local styles
const StyledFooter = styled.div`
  grid-area: footer;
  background-color: #ccc;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Footer = () => {
  return (
    <StyledFooter>
      <p>Created by Dawid Płuciennik. All rights reserved.</p>
    </StyledFooter>
  );
};

export default Footer;
