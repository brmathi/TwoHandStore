import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function User() {
  const navigation = useNavigation<any>();

  return (
    <View style={styles.container}>
      
      {/* PERFIL */}
      <View style={styles.header}>
        <View style={styles.avatar} />
        <Text style={styles.nome}>Marcos Felipe</Text>
      </View>

      {/* MENU */}
      <View style={styles.menu}>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Cart')}
        >
          <Ionicons name="cart-outline" size={22} />
          <Text style={styles.text}>Carrinho</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Favorites')}
        >
          <Ionicons name="heart-outline" size={22} />
          <Text style={styles.text}>Curtidos</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyItems')}
        >
          <Ionicons name="cube-outline" size={22} />
          <Text style={styles.text}>Meus anúncios</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  header: {
    alignItems: 'center',
    paddingVertical: 40,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
  },

  avatar: {
    width: 90,
    height: 90,
    backgroundColor: '#ccc',
    borderRadius: 45,
    marginBottom: 10,
  },

  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },

  menu: {
    marginTop: 20,
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 0.5,
    borderColor: '#eee',
    gap: 10,
  },

  text: {
    fontSize: 16,
  },
});