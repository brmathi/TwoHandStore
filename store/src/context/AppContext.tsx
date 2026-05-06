import { createContext, useContext, useState } from 'react';

type Produto = {
  id: string;
  nome: string;
  preco: number;
  img: any;
};

type ContextType = {
  carrinho: Produto[];
  favoritos: Produto[];
  meusItens: Produto[];

  addCarrinho: (item: Produto) => void;
  addFavorito: (item: Produto) => void;
};

const AppContext = createContext({} as ContextType);

export function AppProvider({ children }: any) {
  const [carrinho, setCarrinho] = useState<Produto[]>([]);
  const [favoritos, setFavoritos] = useState<Produto[]>([]);
  const [meusItens] = useState<Produto[]>([
    {
      id: '99',
      nome: 'Moletom Puma',
      preco: 150,
      img: require('../../assets/img/img3.webp'),
    },
  ]);

  function addCarrinho(item: Produto) {
    setCarrinho(prev => [item, ...prev]);
  }

  function addFavorito(item: Produto) {
    setFavoritos(prev => [item, ...prev]);
  }

  return (
    <AppContext.Provider
      value={{ carrinho, favoritos, meusItens, addCarrinho, addFavorito }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  return useContext(AppContext);
}