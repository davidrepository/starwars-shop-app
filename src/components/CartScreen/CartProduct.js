import React from 'react';

// REDUX
import { useDispatch } from 'react-redux';
import { removeProductFromCart } from '../../redux/ducks/cartDuck';

// STYLES
import styled from 'styled-components';
import { StyledProductOfListName, StyledLink } from '../../styled';

// RENDERS
import RenderInfoLine from '../renders/RenderInfoLine';

// Local styles
const StyledProductInCart = styled.li`
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 32px;
  position: relative;
`;

const StyledButtonDelete = styled.button`
  position: absolute;
  right: 32px;
  top: 32px;
  color: #fa8072;
  border: none;
`;

const GoToProductButton = styled(StyledLink)`
  color: #295be6;
`;

const ProductInCart = ({ product }) => {
  const dispatch = useDispatch();

  const renderManufacturers = () => {
    return product.productDetails.manufacturers.map(manufacturer => (
      <div key={manufacturer}>{manufacturer}</div>
    ));
  };

  return (
    <StyledProductInCart>
      <GoToProductButton to={`/product/${product.productDetails.id}`}>
        Go to product
      </GoToProductButton>

      <StyledProductOfListName>
        {product.productDetails.name}
      </StyledProductOfListName>
      {RenderInfoLine('Manufacturers:', renderManufacturers())}
      {RenderInfoLine('Cost in credits:', product.productDetails.costInCredits)}
      {RenderInfoLine('Quantity:', product.quantity)}
      {RenderInfoLine(
        'Sum:',
        product.quantity * product.productDetails.costInCredits,
      )}

      <StyledButtonDelete
        onClick={() =>
          dispatch(removeProductFromCart(product.productDetails.id))
        }
      >
        Delete product
      </StyledButtonDelete>
    </StyledProductInCart>
  );
};

export default ProductInCart;
