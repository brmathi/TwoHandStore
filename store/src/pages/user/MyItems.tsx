import React from 'react';
import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { useProducts } from '../../context/ProductContext';

export default function MyItems() {
  const navigation = useNavigation<any>();
  const { myProducts, deleteProduct } = useProducts();

  return (
    <View style={styles.container}>
      {/* HEADER PERSONALIZADO */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.title}>Meus Anúncios</Text>
        <View style={{ width: 24 }} />
      </View>

      <FlatList
        data={myProducts}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.listContent}
        
        // MENSAGEM QUANDO NÃO HÁ NADA PUBLICADO
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Ionicons name="shirt-outline" size={80} color="#333" />
            <Text style={styles.emptyText}>Você ainda não publicou nada</Text>
            <Text style={styles.emptySubText}>
              Vá na aba de vendas para anunciar seus produtos no brechó.
            </Text>
            <TouchableOpacity 
              style={styles.sellButton}
              onPress={() => navigation.navigate('Sell')}
            >
              <Text style={styles.sellButtonText}>Anunciar agora</Text>
            </TouchableOpacity>
          </View>
        }

        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image 
              source={typeof item.image === 'string' ? { uri: item.image } : item.image} 
              style={styles.image} 
            />
            <View style={styles.info}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.price}>R$ {item.price}</Text>
              <Text style={styles.status}>Status: Ativo</Text>
            </View>
            
            <TouchableOpacity 
              onPress={() => deleteProduct(item.id)}
              style={styles.deleteBtn}
            >
              <Ionicons name="trash-outline" size={22} color="#ff4444" />
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 50,
    paddingHorizontal: 20,
    paddingBottom: 20,
    backgroundColor: '#111',
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  listContent: {
    flexGrow: 1,
    padding: 20,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 100,
  },
  emptyText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptySubText: {
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    paddingHorizontal: 40,
  },
  sellButton: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 12,
    borderRadius: 25,
    marginTop: 30,
  },
  sellButtonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#111',
    borderRadius: 12,
    padding: 12,
    marginBottom: 15,
    alignItems: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 8,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    color: '#fff',
    fontSize: 14,
    marginTop: 4,
  },
  status: {
    color: '#4CAF50',
    fontSize: 12,
    marginTop: 4,
  },
  deleteBtn: {
    padding: 10,
  },
});