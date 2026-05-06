import { FlatList } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import ProdutoCard from '../../components/productCard'
import { produtos } from '../../../data/arrayprodutos'

export default function Feed() {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#efefef' }}>
      <FlatList
        data={produtos}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        contentContainerStyle={{padding: 6}}
        columnWrapperStyle={{justifyContent: 'space-between'}}
        renderItem={({ item }) => (
          <ProdutoCard produto={item} />
        )}
      />
    </SafeAreaView>
  )
}