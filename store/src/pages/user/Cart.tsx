import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useCart } from '../../context/CartContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Cart() {
  const { cart, removeFromCart } = useCart();
  const navigation = useNavigation<any>();

  if (cart.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="cart-outline" size={80} color="#ccc" />
        <Text style={styles.emptyText}>Seu carrinho está vazio.</Text>
        <TouchableOpacity 
          style={styles.backToHomeButton}
          onPress={() => navigation.navigate('BottomRoutes')} 
        >
          <Text style={styles.backToHomeText}>Voltar para compras</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Meu Carrinho</Text>

      <FlatList
        data={cart}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.cartItem}>
            <Image 
              source={item.image || (typeof item.img === 'string' ? { uri: item.img } : item.img)} 
              style={styles.itemImage} 
            />
            <View style={styles.itemDetails}>
              <Text style={styles.itemName}>{item.brand || item.nome}</Text>
              <Text style={styles.itemPrice}>R$ {item.price || item.preco}</Text>
            </View>
            <TouchableOpacity onPress={() => removeFromCart(item.id)}>
              <Ionicons name="trash-outline" size={24} color="red" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', padding: 20 },
  back: { marginTop: 40 },
  title: { fontSize: 24, fontWeight: 'bold', marginVertical: 20 },
  emptyContainer: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' },
  emptyText: { fontSize: 18, color: '#666', fontWeight: '500' },
  
  // ESTILOS DO BOTÃO DE VOLTAR
  backToHomeButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
  },
  backToHomeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  cartItem: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    padding: 10, 
    backgroundColor: '#f9f9f9', 
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#eee'
  },
  itemImage: { width: 60, height: 60, borderRadius: 8, marginRight: 15 },
  itemDetails: { flex: 1 },
  itemName: { fontSize: 16, fontWeight: 'bold' },
  itemPrice: { fontSize: 14, color: '#333' },
});