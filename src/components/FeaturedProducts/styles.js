import styled from 'styled-components';

export const ProductsContainer = styled.section`
  padding: 60px 48px;
  background-color: #fff;
`;

export const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
`;

export const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  margin-bottom: 16px;
`;

export const ProductInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

export const ProductDetails = styled.div``;

export const ProductName = styled.h3`
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 4px;
`;

export const ProductCategory = styled.p`
  font-size: 16px;
  color: #757575;
`;

export const ProductPrice = styled.span`
  font-size: 16px;
`;

