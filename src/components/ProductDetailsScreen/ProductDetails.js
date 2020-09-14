import React, { useState } from 'react';
import styled from 'styled-components';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/ducks/cartDuck';

// RENDERS
import RenderInfoLine from '../renders/RenderInfoLine';

// STYLES
import {
  StyledForm,
  StyledInputNumber,
  StyledButtonPrimary,
  StyledProductOfListName,
} from '../../styled';

const ProductInCart = ({ productDetails }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  const renderManufacturers = () => {
    return productDetails.manufacturers.map(item => (
      <div key={item}>{item}</div>
    ));
  };

  const { loading: cartLoading } = useSelector(({ cartDuck }) => cartDuck);

  return (
    <>
      <StyledProductOfListName>{productDetails.name}</StyledProductOfListName>

      {RenderInfoLine('Manufacturers:', renderManufacturers())}
      {RenderInfoLine('Model:', productDetails.model)}
      {RenderInfoLine('Crew:', productDetails.crew)}
      {RenderInfoLine('Passengers:', productDetails.passengers)}
      {RenderInfoLine('Cost in credits:', productDetails.costInCredits)}

      <StyledForm onSubmit={e => handleOnSubmit(e)}>
        <StyledInputNumber
          type="number"
          value={quantity}
          onChange={e => setQuantity(parseInt(e.target.value))}
        />
        <StyledButtonPrimary
          onClick={() => dispatch(addProductToCart(productDetails, quantity))}
          disabled={cartLoading}
        >
          Add
        </StyledButtonPrimary>
      </StyledForm>
    </>
  );
};

export default ProductInCart;
