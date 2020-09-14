import React from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';

// SCREENS
import HomeScreen from './HomeScreen';
import ProductDetailsScreen from '../ProductDetailsScreen/ProductDetailsScreen';
import CartScreen from '../CartScreen/CartScreen';

// Local styles
const StyledMain = styled.div`
  grid-area: main;
  padding: 64px;
`;

const Main = () => {
  return (
    <StyledMain>
      <Route path="/" exact component={HomeScreen} />
      <Route path="/product/:id" component={ProductDetailsScreen} />
      <Route path="/cart" component={CartScreen} />
    </StyledMain>
  );
};

export default Main;
