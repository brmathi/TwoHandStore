import { useNavigation } from '@react-navigation/native'
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { useRoute } from '@react-navigation/native'
import { useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { produtos } from '../../../../data/arrayprodutos'

export default function Produto() {
  const navigation = useNavigation()
  const route = useRoute()

  const { id } = route.params as { id: number }

  const produto = produtos.find(p => p.id === id)

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(produto?.likes ?? 0)

  function toggleLike() {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  if (!produto) {
    return <Text>Produto não encontrado</Text>
  }

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>

      <View>
        <Image source={produto.image} style={styles.image} />

        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={22} color="#000" />
        </TouchableOpacity>

        <TouchableOpacity style={styles.likeButton} onPress={toggleLike}>
            <Ionicons
                name={liked ? "heart" : "heart-outline"}
                size={20}
                color={liked ? "red" : "#000"}
            />
</TouchableOpacity>
      </View>

      <View style={styles.infoContainer}>

        <Text style={styles.brand}>{produto.brand}</Text>

        <Text style={styles.size}>Tamanho: {produto.size}</Text>

        <Text style={styles.price}>R$ {produto.price}</Text>

        <Text style={styles.likes}>❤️ {likes} curtidas</Text>

        <Text style={styles.description}>
          Produto em ótimo estado, pouco usado. Ideal para compor looks modernos.
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Add card</Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000'
  },

  image: {
    width: '100%',
    height: 350
  },

  backButton: {
    position: 'absolute',
    top: 40,
    left: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20
  },

  likeButton: {
    position: 'absolute',
    top: 40,
    right: 16,
    backgroundColor: '#fff',
    padding: 8,
    borderRadius: 20
  },

  infoContainer: {
    padding: 16
  },

  brand: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold'
  },

  size: {
    color: '#aaa',
    marginTop: 6
  },

  price: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },

  likes: {
    color: '#aaa',
    marginTop: 6
  },

  description: {
    color: '#ccc',
    marginTop: 12,
    lineHeight: 20
  },

  button: {
    backgroundColor: '#fff',
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center'
  },

  buttonText: {
    color: '#000',
    fontWeight: 'bold'
  }
})