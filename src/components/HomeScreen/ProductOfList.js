import React, { useState } from 'react';
import styled from 'styled-components';

// REDUX
import { addProductToCart } from '../../redux/ducks/cartDuck';
import { useDispatch } from 'react-redux';

// RENDERS
import RenderInfoLine from '../renders/RenderInfoLine';

// STYLES
import {
  StyledForm,
  StyledInputNumber,
  StyledButtonPrimary,
  StyledProductOfListName,
  StyledLink,
} from '../../styled';

// Local styles
const StyledProductOfList = styled.li`
  border-radius: 8px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

const StyledInaccessible = styled.div`
  color: #fa8072;
  font-weight: 700;
  margin-top: 4px;
  line-height: 1.6;
`;

const ProductOfList = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();

  const handleOnSubmit = e => {
    e.preventDefault();
  };

  const renderManufacturers = manufacturers => {
    return manufacturers.map(manufacturer => (
      <div key={manufacturer}>{manufacturer}</div>
    ));
  };

  const renderCTA = () => {
    return (
      <>
        <StyledForm onSubmit={e => handleOnSubmit(e)}>
          <StyledInputNumber
            type="number"
            onChange={e => setQuantity(e.target.value)}
            value={quantity}
          />
          <StyledButtonPrimary
            onClick={() =>
              dispatch(addProductToCart(product, parseInt(quantity)))
            }
          >
            Add to cart
          </StyledButtonPrimary>
        </StyledForm>
        <StyledLink to={`/product/${product.id}`}>More info</StyledLink>
      </>
    );
  };

  const renderCostInCredits = () => {
    if (!product.costInCredits)
      return <StyledInaccessible>Inaccessible</StyledInaccessible>;

    return RenderInfoLine('Cost in credits:', product.costInCredits);
  };

  return (
    <StyledProductOfList>
      <StyledProductOfListName>{product.name}</StyledProductOfListName>
      {RenderInfoLine(
        'Manufacturers:',
        renderManufacturers(product.manufacturers),
      )}
      {renderCostInCredits()}
      {product.costInCredits && renderCTA()}
    </StyledProductOfList>
  );
};

export default ProductOfList;
