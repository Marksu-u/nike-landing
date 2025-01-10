import React from 'react';
import {
  ProductsContainer,
  ProductsGrid,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductDetails,
  ProductName,
  ProductCategory,
  ProductPrice,
} from './styles';

const products = [
  {
    id: 1,
    name: 'Nike Air Force 1 \'07',
    category: 'Men\'s Shoes',
    price: '$110',
    image: '/product.jpg',
  },
  {
    id: 2,
    name: 'Nike Sportswear Club Fleece',
    category: 'Men\'s Pullover Hoodie',
    price: '$55',
    image: '/product.jpg',
  },
  {
    id: 3,
    name: 'Nike Dri-FIT ADV Run Division',
    category: 'Women\'s Running Jacket',
    price: '$120',
    image: '/product.jpg',
  },
];

const FeaturedProducts = () => {
  return (
    <ProductsContainer>
      <ProductsGrid>
        {products.map((product) => (
          <ProductCard key={product.id}>
            <ProductImage src={product.image} alt={product.name} />
            <ProductInfo>
              <ProductDetails>
                <ProductName>{product.name}</ProductName>
                <ProductCategory>{product.category}</ProductCategory>
              </ProductDetails>
              <ProductPrice>{product.price}</ProductPrice>
            </ProductInfo>
          </ProductCard>
        ))}
      </ProductsGrid>
    </ProductsContainer>
  );
};

export default FeaturedProducts;