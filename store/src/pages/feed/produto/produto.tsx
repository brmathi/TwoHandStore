import { useNavigation, useRoute } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { produtos } from '../../../../data/arrayprodutos';

// IMPORTAÇÃO DOS CONTEXTOS
import { useCart } from '../../../context/CartContext'; 
import { useLikes } from '../../../context/LikesContext'; // Importado o LikesContext

export default function Produto() {
  const navigation = useNavigation();
  const route = useRoute();
  
  // PEGANDO AS FUNÇÕES DOS CONTEXTOS (CARRINHO E CURTIDAS)
  const { addToCart } = useCart();
  const { toggleLike, isProductLiked } = useLikes(); 

  const params = route.params as any;
  const idStr = params?.id?.toString();

  const produtoNoArray = produtos.find(p => p.id.toString() === idStr);
  const produto = produtoNoArray || params;

  // VERIFICAÇÃO GLOBAL: Se o ID deste produto está na lista de curtidos do Contexto
  const liked = isProductLiked(produto?.id);

  if (!produto || (!produto.image && !produto.img)) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <Text style={{ color: '#fff' }}>Produto não encontrado</Text>
        <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginTop: 20 }}>
           <Text style={{ color: '#fff', textDecorationLine: 'underline' }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const imagemSource = produto.image || (typeof produto.img === 'string' ? { uri: produto.img } : produto.img);

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View>
        <View style={styles.imageWrapper}>
            <Image 
                source={imagemSource} 
                style={styles.image} 
                resizeMode="contain" 
            />
        </View>

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        {/* BOTÃO DE LIKE ATUALIZADO: Agora usa a função do Contexto */}
        <TouchableOpacity 
          style={styles.likeButton} 
          onPress={() => toggleLike(produto)}
        >
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={20}
            color={liked ? "red" : "#000"}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>
        <Text style={styles.brand}>{produto.brand || produto.nome}</Text>

        <Text style={styles.size}>Tamanho: {produto.size || 'M'}</Text>

        <Text style={styles.price}>R$ {produto.price || produto.preco}</Text>

        <Text style={styles.description}>
          {produto.description || "Produto em ótimo estado, pouco usado. Ideal para compor looks modernos."}
        </Text>

        <TouchableOpacity 
          style={styles.button} 
          activeOpacity={0.7}
          onPress={() => addToCart(produto)}
        >
          <Text style={styles.buttonText}>Adicionar ao Carrinho</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  imageWrapper: {
    backgroundColor: '#fff', 
    width: '100%',
    height: 390,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
  likeButton: {
    position: 'absolute',
    top: 50,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20,
    elevation: 5,
  },
  infoContainer: {
    padding: 20,
  },
  brand: {
    color: '#fff',
    fontSize: 26,
    fontWeight: 'bold',
  },
  size: {
    color: '#aaa',
    marginTop: 6,
    fontSize: 16,
  },
  price: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
  },
  description: {
    color: '#ccc',
    marginTop: 15,
    lineHeight: 22,
    fontSize: 15,
  },
  button: {
    backgroundColor: '#fff',
    marginTop: 30,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 16,
  },
});