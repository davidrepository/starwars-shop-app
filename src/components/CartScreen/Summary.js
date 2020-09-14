import React from 'react';
import styled from 'styled-components';

// REDUX
import { useSelector, useDispatch } from 'react-redux';

// STYLES
import { StyledButtonDanger } from '../../styled';

// REDUX
import { removeAllProductsFromCart } from '../../redux/ducks/cartDuck';

// Local styles
const StyledSummary = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const StyledSubtotalHeader = styled.h3``;

const StyledCostsSummaryHeader = styled.h3``;

const Summary = () => {
  const dispatch = useDispatch();
  const { cartProducts } = useSelector(({ cartDuck }) => cartDuck);
  const cartProductsLength = cartProducts.length;

  // Functions
  const subtotal = cartProducts => {
    return cartProducts.reduce((a, c) => a + c.quantity, 0);
  };

  const costsSummary = cartProducts => {
    return cartProducts.reduce(
      (a, c) => a + c.quantity * c.productDetails.costInCredits,
      0,
    );
  };

  const renderSummary = (cartProductsLength, cartProducts) => {
    if (!cartProductsLength) return <p>Your cart is empty.</p>;

    return (
      <StyledSummary>
        <StyledSubtotalHeader>
          Subtotal: {subtotal(cartProducts)}
        </StyledSubtotalHeader>
        <StyledCostsSummaryHeader>
          Costs in credits summary: {costsSummary(cartProducts)}
        </StyledCostsSummaryHeader>
        <StyledButtonDanger
          onClick={() => dispatch(removeAllProductsFromCart())}
        >
          Remove all products from cart
        </StyledButtonDanger>
      </StyledSummary>
    );
  };

  return (
    <StyledSummary>
      {renderSummary(cartProductsLength, cartProducts)}
    </StyledSummary>
  );
};

export default Summary;
