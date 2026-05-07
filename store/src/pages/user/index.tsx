import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

export default function User() {
  const navigation = useNavigation<any>();

  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Ionicons name="person" size={50} color="#fff" />
        </View>
        <Text style={styles.nome}>Marcos Felipe</Text>
        <Text style={styles.username}>@marcos.felipe</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Informações Pessoais</Text>
        
        <View style={styles.infoBox}>
          <View style={styles.infoItem}>
            <Ionicons name="mail-outline" size={20} color="#888" />
            <View>
              <Text style={styles.infoLabel}>E-mail</Text>
              <Text style={styles.infoValue}>marcos.felipe@gmail.com</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="call-outline" size={20} color="#888" />
            <View>
              <Text style={styles.infoLabel}>Telefone</Text>
              <Text style={styles.infoValue}>(31) 99999-9999</Text>
            </View>
          </View>

          <View style={styles.infoItem}>
            <Ionicons name="location-outline" size={20} color="#888" />
            <View>
              <Text style={styles.infoLabel}>Localização</Text>
              <Text style={styles.infoValue}>Belo Horizonte, Brasil</Text>
            </View>
          </View>
        </View>
      </View>

      <View style={styles.menu}>
        <Text style={styles.sectionTitle}>Atividades</Text>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Cart')}
        >
          <View style={styles.itemLeft}>
            <Ionicons name="cart-outline" size={22} color="#fff" />
            <Text style={styles.text}>Meu Carrinho</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('Liked')}
        >
          <View style={styles.itemLeft}>
            <Ionicons name="heart-outline" size={22} color="#fff" />
            <Text style={styles.text}>Curtidos</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('MyItems')}
        >
          <View style={styles.itemLeft}>
            <Ionicons name="cube-outline" size={22} color="#fff" />
            <Text style={styles.text}>Meus anúncios</Text>
          </View>
          <Ionicons name="chevron-forward" size={18} color="#444" />
        </TouchableOpacity>

        <TouchableOpacity style={[styles.item, { marginTop: 20 }]}>
          <View style={styles.itemLeft}>
            <Ionicons name="log-out-outline" size={22} color="#ff4444" />
            <Text style={[styles.text, { color: '#ff4444' }]}>Sair da conta</Text>
          </View>
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
  header: {
    alignItems: 'center',
    paddingVertical: 50,
    backgroundColor: '#111',
  },
  avatar: {
    width: 100,
    height: 100,
    backgroundColor: '#333',
    borderRadius: 50,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  nome: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  username: {
    fontSize: 14,
    color: '#888',
    marginTop: 4,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#888',
    textTransform: 'uppercase',
    marginBottom: 15,
    marginLeft: 5,
  },
  infoBox: {
    backgroundColor: '#111',
    borderRadius: 15,
    padding: 15,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 15,
    marginBottom: 15,
  },
  infoLabel: {
    fontSize: 12,
    color: '#666',
  },
  infoValue: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '500',
  },
  menu: {
    paddingHorizontal: 20,
    paddingBottom: 40,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#111',
    borderRadius: 12,
    marginBottom: 10,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  text: {
    fontSize: 16,
    color: '#fff',
  },
});