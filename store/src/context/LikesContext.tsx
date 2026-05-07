import React, { createContext, useState, useContext } from 'react';

const LikesContext = createContext<any>(null);

export const LikesProvider = ({ children }: any) => {
  const [likedProducts, setLikedProducts] = useState([]);

  const toggleLike = (product: any) => {
   
    if (!product) return;

    const isLiked = likedProducts.find((item: any) => item.id === product.id);
    
    if (isLiked) {
      // Se já curtiu, remove da lista
      setLikedProducts(likedProducts.filter((item: any) => item.id !== product.id));
    } else {
      // Se não curtiu, adiciona à lista
      setLikedProducts([...likedProducts, product] as any);
    }
  };

  const isProductLiked = (id: any) => {
    return likedProducts.some((item: any) => item.id === id);
  };

  return (
    <LikesContext.Provider value={{ likedProducts, toggleLike, isProductLiked }}>
      {children}
    </LikesContext.Provider>
  );
};

export const useLikes = () => useContext(LikesContext);