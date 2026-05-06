import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function ProdutoDetalhes() {
  const router = useRouter();
  const item = useLocalSearchParams(); // 🔥 Pega os dados enviados

  // Como o params converte tudo pra string, precisamos tratar a imagem
  // Se for um número (imagem local), o JS pode ler como string, então convertemos
  const imagemSource = isNaN(item.img) ? { uri: item.img } : parseInt(item.img);

  return (
    <View style={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity style={styles.btnVoltar} onPress={() => router.back()}>
        <Text style={styles.btnTexto}>← Voltar</Text>
      </TouchableOpacity>

      <View style={styles.cardDetalhe}>
        <Image 
          source={imagemSource} 
          style={styles.image} 
          resizeMode="contain" 
        />
        
        <View style={styles.info}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text style={styles.preco}>R$ {item.preco}</Text>
          <Text style={styles.descricao}>
            Este é um produto de alta qualidade disponível na nossa loja. 
            Design exclusivo e conforto garantido.
          </Text>
          
          <TouchableOpacity style={styles.botaoComprar}>
            <Text style={styles.textoComprar}>ADICIONAR AO CARRINHO</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  btnVoltar: {
    marginTop: 40,
    marginBottom: 20,
  },
  btnTexto: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  cardDetalhe: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#f9f9f9',
    borderRadius: 20,
  },
  info: {
    width: '100%',
    marginTop: 20,
  },
  nome: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
  },
  preco: {
    fontSize: 22,
    color: '#666',
    marginVertical: 10,
  },
  descricao: {
    fontSize: 16,
    color: '#444',
    lineHeight: 22,
    marginBottom: 30,
  },
  botaoComprar: {
    backgroundColor: '#000',
    padding: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  textoComprar: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});