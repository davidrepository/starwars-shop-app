import React from 'react';
import styled from 'styled-components';

// COMPONENTS
import ProductInCart from './CartProduct';
import Summary from './Summary';

// STYLES
import { StyledLink } from '../../styled';

// REDUX
import { useSelector } from 'react-redux';

// Local styles
const StyledCartScreen = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
`;

const StyledCartProducts = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
`;

const CartScreen = () => {
  const { cartProducts } = useSelector(({ cartDuck }) => cartDuck);

  // Functions
  const renderCartProducts = cartProducts => {
    return (
      <StyledCartProducts>
        {cartProducts.map(product => (
          <ProductInCart key={product.productDetails.id} product={product} />
        ))}
      </StyledCartProducts>
    );
  };

  return (
    <StyledCartScreen>
      <StyledLink to="/">Back to home page</StyledLink>
      {renderCartProducts(cartProducts)}
      <Summary />
    </StyledCartScreen>
  );
};

export default CartScreen;
