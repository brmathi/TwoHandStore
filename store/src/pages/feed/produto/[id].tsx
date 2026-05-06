import { useLocalSearchParams } from 'expo-router'
import { View, Text } from 'react-native'

export default function Produto() {
  const { id } = useLocalSearchParams()

  return (
    <View>
      <Text>Produto {id}</Text>
    </View>
  )
}