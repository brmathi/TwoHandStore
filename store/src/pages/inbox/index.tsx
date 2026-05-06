import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

interface Notificacao {
  id: string;
  tipo: 'curtida' | 'seguidor' | 'venda';
  usuario: string;
  avatar: any; 
  mensagem: string;
  tempo: string;
  previewPeca?: any;
}

export default function Inbox() {
  const [notificacoes, setNotificacoes] = useState<Notificacao[]>([
    {
      id: '1',
      tipo: 'seguidor',
      usuario: 'pedr0',
      avatar: require('../../../assets/img/img5.png'), 
      mensagem: 'começou a seguir você.',
      tempo: '2 min',
    },
    {
      id: '2',
      tipo: 'curtida',
      usuario: 'ana.clara',
      avatar: require('../../../assets/img/img6.png'),
      mensagem: 'curtiu sua peça: Camiseta Nike.',
      tempo: '15 min',
      previewPeca: require('../../../assets/img/img1.webp'),
    },
    {
      id: '3',
      tipo: 'curtida',
      usuario: 'gui05_',
      avatar: require('../../../assets/img/img7.png'),
      mensagem: 'curtiu sua peça: Camiseta Puma.',
      tempo: '1 h',
      previewPeca: require('../../../assets/img/img3.webp'),
    },
  ]);

  const renderIcon = (tipo: string) => {
    switch (tipo) {
      case 'curtida': return <Ionicons name="heart" size={14} color="#ff4757" />;
      case 'seguidor': return <Ionicons name="person-add" size={14} color="#2f3542" />;
      default: return <Ionicons name="notifications" size={14} color="#2f3542" />;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Notificações</Text>
      </View>

      <FlatList
        data={notificacoes}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 20 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.notificacaoItem} activeOpacity={0.7}>
            <View style={styles.avatarContainer}>
              <Image 
                source={typeof item.avatar === 'string' ? { uri: item.avatar } : item.avatar} 
                style={styles.avatar} 
              />
              <View style={styles.iconBadge}>
                {renderIcon(item.tipo)}
              </View>
            </View>

            <View style={styles.textContainer}>
              <Text style={styles.messageText} numberOfLines={2}>
                <Text style={styles.userName}>{item.usuario} </Text>
                {item.mensagem}
              </Text>
              <Text style={styles.timeText}>{item.tempo}</Text>
            </View>

            {item.previewPeca && (
              <Image source={item.previewPeca} style={styles.previewImage} />
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  notificacaoItem: {
    flexDirection: 'row',
    padding: 15,
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#f0f0f0',
  },
  avatarContainer: {
    position: 'relative',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#eee',
  },
  iconBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 2,
    borderWidth: 1,
    borderColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center'
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    paddingRight: 10,
  },
  userName: {
    fontWeight: 'bold',
    color: '#000',
  },
  messageText: {
    fontSize: 14,
    color: '#2f3542',
    lineHeight: 18,
  },
  timeText: {
    fontSize: 12,
    color: '#a4b0be',
    marginTop: 4,
  },
  previewImage: {
    width: 45,
    height: 45,
    borderRadius: 4,
    backgroundColor: '#f9f9f9',
  },
});