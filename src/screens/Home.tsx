import { useNavigation } from '@react-navigation/native'
import { CityItem, TextInput } from 'components'
import { NavStackProps } from 'navigation'
import { useState } from 'react'
import { FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const API_WEATHER_KEY = '889f0cd84330b182bf974584d4b2966d'

export function Home() {
  const { navigate } = useNavigation<NavStackProps<'Home'>['navigation']>()
  const { top, bottom } = useSafeAreaInsets()
  const [cities, setCities] = useState<Array<any>>([])

  const getCities = async (city: string) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_WEATHER_KEY}`,
      )
      const cityWeather = await response.json()
      setCities([cityWeather])
      console.log(cityWeather)
    } catch (error) {
      console.log(error)
    }
  }

  const onCityPress = () => navigate('CityWeather')

  return (
    <View
      style={{
        flex: 1,
        paddingTop: top,
        paddingBottom: bottom,
        paddingHorizontal: 16,
      }}
    >
      <TextInput
        placeholder='Enter the city'
        onSubmitEditing={({ nativeEvent }) => getCities(nativeEvent.text)}
      />

      <FlatList
        style={{ marginTop: 16 }}
        data={cities}
        renderItem={({ item }) => (
          <CityItem city={item} onPress={onCityPress} />
        )}
      />
    </View>
  )
}
