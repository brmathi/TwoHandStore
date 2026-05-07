import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useLikes } from '../../context/LikesContext';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Liked() {
  const { likedProducts, toggleLike } = useLikes();
  const navigation = useNavigation<any>();

  if (likedProducts.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="heart-dislike-outline" size={80} color="#ccc" />
        <Text style={styles.emptyText}>Você ainda não curtiu nada.</Text>
        <TouchableOpacity 
          style={styles.backToHomeButton}
          onPress={() => navigation.navigate('BottomRoutes')}
        >
          <Text style={styles.backToHomeText}>Explorar produtos</Text>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {/* Botão para voltar para a tela anterior */}
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
      </TouchableOpacity>
      
      <Text style={styles.title}>Meus Curtidos</Text>

      <FlatList
        data={likedProducts}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          // Resolve a fonte da imagem (local ou link)
          const imagemSource = item.image || (typeof item.img === 'string' ? { uri: item.img } : item.img);
          
          return (
            <TouchableOpacity 
              style={styles.itemCard}
              activeOpacity={0.8}
              onPress={() => navigation.navigate('Produto', item)} // Navega para o produto ao clicar no card
            >
              <Image source={imagemSource} style={styles.img} />
              
              <View style={styles.itemDetails}>
                <Text style={styles.name} numberOfLines={1}>{item.brand || item.nome}</Text>
                <Text style={styles.price}>R$ {item.price || item.preco}</Text>
              </View>

              {/* Botão de descurtir diretamente na lista */}
              <TouchableOpacity 
                style={styles.removeButton}
                onPress={() => toggleLike(item)}
              >
                <Ionicons name="heart" size={26} color="red" />
              </TouchableOpacity>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: '#fff', 
    paddingHorizontal: 20 
  },
  back: { 
    marginTop: 50, // Ajustado para não bater na barra de status
    marginBottom: 10 
  },
  title: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#000',
    marginBottom: 20 
  },
  emptyContainer: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: '#fff',
    padding: 20 
  },
  emptyText: { 
    fontSize: 16, 
    color: '#666', 
    marginBottom: 25,
    textAlign: 'center' 
  },
  itemCard: { 
    flexDirection: 'row', 
    alignItems: 'center', 
    marginBottom: 15, 
    padding: 12, 
    backgroundColor: '#fff', 
    borderRadius: 16,
    // Sombra leve para destacar o card
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  img: { 
    width: 70, 
    height: 70, 
    borderRadius: 12,
    backgroundColor: '#f0f0f0' 
  },
  itemDetails: { 
    flex: 1, 
    marginLeft: 15 
  },
  name: { 
    fontSize: 16, 
    fontWeight: 'bold', 
    color: '#000' 
  },
  price: { 
    fontSize: 15, 
    color: '#2ecc71', // Verde para destacar o preço
    fontWeight: '600',
    marginTop: 4 
  },
  removeButton: {
    padding: 5
  },
  backToHomeButton: {
    backgroundColor: '#000',
    paddingHorizontal: 35,
    paddingVertical: 15,
    borderRadius: 30,
  },
  backToHomeText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16
  }
});