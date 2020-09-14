import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// REDUX
import { useSelector } from 'react-redux';

// Local styles
const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 64px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  z-index: 2;
`;

const StyledImg = styled.img`
  height: 24px;
`;

const CartLink = styled(Link)`
  position: relative;
`;

const CartQuantity = styled.div`
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #fa8072;
  padding: 0 4px;
  border-radius: 50%;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
`;

const Header = () => {
  const { cartProducts } = useSelector(({ cartDuck }) => cartDuck);
  const itemsInCart = cartProducts.length;

  return (
    <StyledHeader>
      <Link to="/">Starwars shop</Link>
      <CartLink to="/cart">
        <StyledImg src="/img/cart.svg" />
        <CartQuantity>{itemsInCart}</CartQuantity>
      </CartLink>
    </StyledHeader>
  );
};

export default Header;
