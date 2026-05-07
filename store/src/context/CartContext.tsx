import React, { createContext, useState, useContext } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const CartContext = createContext<any>(null);

export const CartProvider = ({ children }: any) => {
  const [cart, setCart] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [toastType, setToastType] = useState<'success' | 'error'>('success'); 
  const fadeAnim = useState(new Animated.Value(0))[0];

  const triggerToast = (message: string, type: 'success' | 'error') => {
    setToastMsg(message);
    setToastType(type); 
    setShowToast(true);
    
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      Animated.timing(fadeAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => setShowToast(false));
    }, 2000);
  };

  const addToCart = (product: any) => {
    const exists = cart.find((item: any) => item.id === product.id);
    if (!exists) {
      setCart([...cart, product] as any);
      triggerToast("Adicionado com sucesso! ✅", 'success');
    } else {
      triggerToast("Este item já está no carrinho! ⚠️", 'error'); 
    }
  };

  const removeFromCart = (id: any) => {
    setCart(cart.filter((item: any) => item.id !== id));
    triggerToast("Removido do carrinho! 🗑️", 'error'); 
  }; // <--- Faltava fechar aqui

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
      
      {showToast && (
        <Animated.View style={[
          styles.toast, 
          { opacity: fadeAnim, backgroundColor: toastType === 'success' ? '#2ecc71' : '#e74c3c' } 
        ]}>
          <Text style={styles.toastText}>{toastMsg}</Text>
        </Animated.View>
      )}
    </CartContext.Provider>
  );
}; // <--- Faltava fechar aqui

export const useCart = () => useContext(CartContext);

const styles = StyleSheet.create({
  toast: {
    position: 'absolute',
    bottom: 80,
    alignSelf: 'center',
    paddingHorizontal: 25,
    paddingVertical: 14,
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    zIndex: 9999,
  },
  toastText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 15,
  },
}); 