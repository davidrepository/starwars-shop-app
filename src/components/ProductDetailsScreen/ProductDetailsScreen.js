import React, { useEffect } from 'react';
import styled from 'styled-components';

// COMPONENTS
import ProductDetails from './ProductDetails';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchProductDetails,
  resetProductDetails,
} from '../../redux/ducks/productDetailsDuck';

// STYLES
import { StyledLink, StyledLoading } from '../../styled';

// Local styles
const StyledProductScreen = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const StyledProductDetails = styled.div`
  padding: 32px;
  background-color: red;
  min-height: calc(100% - 40px);
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const ProductScreen = ({ match }) => {
  const { productDetails, loading: productDetailsLoading } = useSelector(
    ({ productDetailsDuck }) => productDetailsDuck,
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductDetails(match.params.id));

    return () => {
      dispatch(resetProductDetails());
    };
  }, []);

  const renderProductDetails = (productDetailsLoading, productDetails) => {
    if (productDetailsLoading) {
      return <StyledLoading>Loading...</StyledLoading>;
    }

    return <ProductDetails productDetails={productDetails} />;
  };

  return (
    <StyledProductScreen>
      <StyledLink to="/">Back to home page</StyledLink>
      <StyledProductDetails>
        {renderProductDetails(productDetailsLoading, productDetails)}
      </StyledProductDetails>
    </StyledProductScreen>
  );
};

export default ProductScreen;
