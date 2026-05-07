import './gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { CartProvider } from './src/context/CartContext';
import { LikesProvider } from './src/context/LikesContext';
import { ProductProvider } from './src/context/ProductContext';
import Routes from './src/routes/index.routes';

export default function App() {
  return (
    <ProductProvider>
      <LikesProvider>
        <CartProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </CartProvider>
      </LikesProvider>
    </ProductProvider>
  );
}