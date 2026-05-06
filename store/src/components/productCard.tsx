import { useNavigation } from '@react-navigation/native'
import { View, TouchableOpacity, Text, Image, StyleSheet, Dimensions } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { prodTypes } from '../../types/prodTypes' 
import { useState } from 'react'

type Props = {produto: prodTypes}

const { width } = Dimensions.get('window')

const CARD_SIZE = (width - 32) / 2

export default function ProdutoCard({ produto }: Props) {
  const navigation = useNavigation<any>()

  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(produto.likes)

  function toggleLike() {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  return (
     <TouchableOpacity
      style={styles.card}
      onPress={() => navigation.navigate("Produto", { id: produto.id })}
      activeOpacity={0.8}
    >
      <View>
        <Image
          style={styles.imagem}
          source={produto.image}
          resizeMode='cover'
        />

        <TouchableOpacity style={styles.likes} onPress={toggleLike}>
          <Ionicons
            name={liked ? "heart" : "heart-outline"}
            size={18}
            color={liked ? "red" : "#000000"}
          />
          <Text style={styles.likesText}>{likes}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.info}>
        <Text style={styles.titulo}>{produto.brand}</Text>
        <Text style={styles.size}>Tamanho {produto.size}</Text>
        <Text style={styles.preco}>R$ {produto.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    width: CARD_SIZE,
    backgroundColor: "#1a1a1a",
    borderRadius: 16,
    marginBottom: 12,
    marginLeft: 3,
    marginRight: 3,
    elevation: 3,
    shadowColor: "#a5a5a5",
    shadowOpacity: 0.2,
    shadowRadius: 8,
  },

  imagem: {
    width: '100%',
    height: CARD_SIZE,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16
  },

  likes: {
    position: 'absolute',
    top: 8,
    right: 8,
    alignItems: 'center'
  },

  likesText: {
    color: '#000000',
    fontSize: 10
  },

  info: {
    padding: 10,
    gap: 4
  },

  titulo: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff"
  },

  size: {
    fontSize: 12,
    color: "#aaa"
  },

  preco: {
    fontSize: 14,
    fontWeight: "600",
    color: "#fff"
  }
})