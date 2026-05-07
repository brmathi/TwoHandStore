import React, { createContext, useState, useContext, ReactNode } from 'react';

interface Product {
  id: string;
  name: string;
  price: string;
  image: string;
  brand?: string;
  size?: string;
  description?: string;
}

interface ProductContextData {
  myProducts: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  deleteProduct: (id: string) => void;
}

const ProductContext = createContext<ProductContextData>({} as ProductContextData);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [myProducts, setMyProducts] = useState<Product[]>([]);

  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct = { 
      ...product, 
      id: Date.now().toString() 
    };
    setMyProducts(prev => [...prev, newProduct]);
  };

  const deleteProduct = (id: string) => {
    setMyProducts(prev => prev.filter(p => p.id !== id));
  };

  return (
    <ProductContext.Provider value={{ myProducts, addProduct, deleteProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => useContext(ProductContext);