import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledForm = styled.form`
  width: 100%;
`;

export const StyledInputNumber = styled.input`
  height: 40px;
  font-size: 16px;
  padding: 0 12px;
  width: 100%;
  border-radius: 8px;
  background-color: #ccc;
  border: none;
  margin: 16px 0;
`;

export const StyledButtonPrimary = styled.button`
  height: 40px;
  width: 100%;
  border: none;
  background-color: rgba(41, 91, 230, 0.1);
  color: rgb(41, 91, 230);
  transition: background-color 0.2s;
  border-radius: 8px;

  &:hover {
    background-color: rgb(41, 91, 230);
    color: #fff;
  }
`;

export const StyledProductOfListName = styled.div`
  font-size: 24px;
  font-weight: 900;
  margin-bottom: 24px;
`;

export const StyledInfoLine = styled.div`
  display: flex;
  gap: 8px;
  margin: 4px 0;
  line-height: 1.6;
`;

export const StyledBoldedText = styled.div`
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  height: 40px;
  width: 100%;
  text-align: center;
  line-height: 40px;
  color: #000;
  font-size: 15px;
  font-weight: 700;

  &:hover {
    text-decoration: underline;
  }
`;

export const StyledInfoText = styled.div``;

export const StyledLoading = styled.div`
  width: 100%;
  text-align: center;
  color: #ff7f50;
  font-size: 18px;
  font-weight: 700;
`;

export const StyledButtonDanger = styled.button`
  color: #fa8072;
`;
// ${({ base }) => base === 'primary' && 'color: red'};
