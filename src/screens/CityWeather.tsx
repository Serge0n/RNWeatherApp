import { Text } from 'components'
import { View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function CityWeather() {
  const { top, bottom } = useSafeAreaInsets()

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 16,
      }}
    >
      <Text>WEATHER SCREEN</Text>
    </View>
  )
}
