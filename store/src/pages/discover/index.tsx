import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native'; // Ajustado para sua estrutura

export default function Discover() {
  const navigation = useNavigation<any>();
  const [busca, setBusca] = useState('');

  // Adicionado o campo 'tamanho' em cada item
  const produtos = [
    { 
      id: '1', 
      nome: 'Nike',
      preco: 120, 
      tamanho: 'G',
      img: require('../../../assets/img/img1.webp') 
    },
     { 
      id: '2', 
      nome: 'Adidas',
      preco: 150, 
      tamanho: 'M',
      img: require('../../../assets/img/img2.webp') 
    },
     { 
      id: '3', 
      nome: 'Puma',
      preco: 90, 
      tamanho: 'P',
      img: require('../../../assets/img/img3.webp') 
    },
     { 
      id: '4', 
      nome: 'Nike Shoes',
      preco: 98, 
      tamanho: '42',
      img: require('../../../assets/img/img4.webp') 
    },
  ];

  const filtrados = produtos.filter((item) =>
    item.nome.toLowerCase().includes(busca.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* 🔎 BARRA DE BUSCA */}
      <TextInput
        placeholder="Buscar roupas, tênis..."
        value={busca}
        onChangeText={setBusca}
        style={styles.input}
      />

      <FlatList
        data={filtrados}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
        contentContainerStyle={{ paddingBottom: 20, flexGrow: 1 }} 
        
        // MENSAGEM DE NÃO ENCONTRADO
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyEmoji}>🔍</Text>
            <Text style={styles.emptyText}>Ops! Não encontramos "{busca}"</Text>
            <Text style={styles.emptySubText}>Tente buscar por outro termo ou categoria.</Text>
          </View>
        }

        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              // Navega para a tela de produto enviando o ID e os dados
              navigation.navigate('produto', { 
                id: item.id,
                nome: item.nome,
                preco: item.preco,
                tamanho: item.tamanho,
                img: item.img
              })
            }
          >
            <View style={styles.imageContainer}>
              <Image 
                source={typeof item.img === 'string' ? { uri: item.img } : item.img} 
                style={styles.image} 
                resizeMode="contain" 
              />
            </View>

            <View style={styles.info}>
              <Text style={styles.nome} numberOfLines={1}>{item.nome}</Text>
              <View style={styles.rowInfo}>
                <Text style={styles.preco}>R$ {item.preco}</Text>
                <Text style={styles.tamanhoTag}>Tam: {item.tamanho}</Text>
              </View>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  input: {
    backgroundColor: '#f0f0f0',
    padding: 12,
    borderRadius: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  card: {
    width: '48%', 
    aspectRatio: 0.9, // Ajustado levemente para caber o texto do tamanho
    marginBottom: 15,
    borderRadius: 12,
    backgroundColor: '#eee',
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#eee',
  },
  imageContainer: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '90%', 
    height: '90%',
  },
  info: {
    padding: 8,
    backgroundColor: '#000',
    justifyContent: 'center',
  },
  rowInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 2,
  },
  nome: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  preco: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  tamanhoTag: {
    color: '#aaa',
    fontSize: 10,
    fontWeight: 'bold',
    backgroundColor: '#333',
    paddingHorizontal: 5,
    paddingVertical: 2,
    borderRadius: 4,
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  emptyEmoji: {
    fontSize: 50,
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  emptySubText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
});