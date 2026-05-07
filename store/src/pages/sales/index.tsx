import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

export default function Sell() {
  const [image, setImage] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [brand, setBrand] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    
    if (status !== 'granted') {
      Alert.alert("Erro", "Acesso à galeria negado.");
      return;
    }

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handlePostSale = () => {
    if (!image || !name || !price) {
      Alert.alert("Erro", "Preencha os campos obrigatórios.");
      return;
    }

    const newProduct = { image, name, brand, size, price, description };
    console.log(newProduct);
    Alert.alert("Sucesso", "Produto anunciado!");
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Anunciar Produto</Text>

        <TouchableOpacity style={styles.imagePicker} onPress={pickImage}>
          {image ? (
            <Image source={{ uri: image }} style={styles.previewImage} />
          ) : (
            <View style={styles.placeholder}>
              <Ionicons name="camera-outline" size={40} color="#666" />
              <Text style={styles.placeholderText}>Adicionar Foto</Text>
            </View>
          )}
        </TouchableOpacity>

        <View style={styles.form}>
          <Text style={styles.label}>Nome do Produto *</Text>
          <TextInput 
            style={styles.input} 
            placeholder="Nome da peça" 
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />

          <View style={styles.row}>
            <View style={{ flex: 1, marginRight: 10 }}>
              <Text style={styles.label}>Marca</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Marca" 
                placeholderTextColor="#888"
                value={brand}
                onChangeText={setBrand}
              />
            </View>
            <View style={{ width: 100 }}>
              <Text style={styles.label}>Tamanho</Text>
              <TextInput 
                style={styles.input} 
                placeholder="Ex: G" 
                placeholderTextColor="#888"
                value={size}
                onChangeText={setSize}
              />
            </View>
          </View>

          <Text style={styles.label}>Preço (R$) *</Text>
          <TextInput 
            style={styles.input} 
            placeholder="0.00" 
            placeholderTextColor="#888"
            keyboardType="numeric"
            value={price}
            onChangeText={setPrice}
          />

          <Text style={styles.label}>Descrição</Text>
          <TextInput 
            style={[styles.input, styles.textArea]} 
            placeholder="Detalhes sobre o estado da peça..." 
            placeholderTextColor="#888"
            multiline
            numberOfLines={4}
            value={description}
            onChangeText={setDescription}
          />

          <TouchableOpacity style={styles.publishButton} onPress={handlePostSale}>
            <Text style={styles.publishButtonText}>Publicar Anúncio</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  scrollContent: { padding: 20, paddingBottom: 40 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#fff', marginTop: 40, marginBottom: 20 },
  imagePicker: {
    width: '100%',
    height: 250,
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#333',
    borderStyle: 'dashed',
    overflow: 'hidden'
  },
  previewImage: { width: '100%', height: '100%' },
  placeholder: { alignItems: 'center' },
  placeholderText: { color: '#666', marginTop: 8, fontSize: 14 },
  form: { marginTop: 25 },
  label: { color: '#fff', fontSize: 14, marginBottom: 8, fontWeight: '600' },
  input: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    padding: 12,
    color: '#fff',
    marginBottom: 18,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333'
  },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
  textArea: { height: 100, textAlignVertical: 'top' },
  publishButton: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 10
  },
  publishButtonText: { color: '#000', fontWeight: 'bold', fontSize: 18 }
});