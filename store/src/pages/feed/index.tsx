import { FlatList, View, Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs'
import ProdutoCard from '../../components/productCard'
import { produtos } from '../../../data/arrayprodutos'

export default function Feed() {

  const tabBarHeight = useBottomTabBarHeight()

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#ffffff' }} edges={['top']}>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Feed</Text>
      </View>

      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{
          padding: 6,
          paddingBottom: tabBarHeight - 20
        }}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({ item }) => (
          <ProdutoCard produto={item} />
        )}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 10,
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: '#eee',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  }
})