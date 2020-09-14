import React, { useEffect } from 'react';
import styled from 'styled-components';

// COMPONENTS
import ProductOfList from './ProductOfList';

// REDUX
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchProducts,
  resetProductsList,
} from '../../redux/ducks/productsDuck';

// STYLES
import { StyledLoading } from '../../styled';

// Local styles
const StyledProductsList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const StyledHomeScreen = styled.div``;

const HomeScreen = () => {
  const { productsList, loading: productsListLoading } = useSelector(
    ({ productsDuck }) => productsDuck,
  );
  const dispatch = useDispatch();

  useEffect(() => {
    // effect
    dispatch(fetchProducts());

    return () => {
      dispatch(resetProductsList());
    };
  }, []);

  const renderProductsList = () => {
    if (productsListLoading) return <StyledLoading>Loading...</StyledLoading>;

    return (
      <StyledProductsList>
        {productsList.map(product => {
          return <ProductOfList key={product.id} product={product} />;
        })}
      </StyledProductsList>
    );
  };

  return <StyledHomeScreen>{renderProductsList()}</StyledHomeScreen>;
};

export default HomeScreen;
