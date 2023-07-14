import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { WeatherData, getCity } from 'api'
import { CityItem, TextInput } from 'components'
import { NavStackProps } from 'navigation'
import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

export function Home() {
  const { navigate } = useNavigation<NavStackProps<'Home'>['navigation']>()
  const [isLoading, setIsLoading] = useState(false)
  const { top, bottom } = useSafeAreaInsets()
  const [cities, setCities] = useState<Array<WeatherData>>([])
  const [favorites, setFavorites] = useState<Array<WeatherData>>([])
  const { getItem, setItem } = useAsyncStorage('favorites')
  const { showBoundary } = useErrorBoundary()

  const getCityData = async (city: string) => {
    try {
      setIsLoading(true)
      const response = await getCity(city)
      const isDuplicate = favorites.some((item) => item.id === response.id)

      !isDuplicate && setCities([response])
    } catch (error) {
      showBoundary(error)
    } finally {
      setIsLoading(false)
    }
  }

  const readItemsFromFavorites = async () => {
    const item = await getItem()
    item && setFavorites(JSON.parse(item))
  }

  const writeItemsToFavorites = async (newValue: WeatherData) => {
    await setItem(JSON.stringify([...favorites, newValue]))
    setFavorites([...favorites, newValue])
    setCities([])
  }

  const removeFavorite = async (newValue: WeatherData) => {
    const filteredFavorites = favorites.filter(
      (item) => newValue.id !== item.id,
    )
    await setItem(JSON.stringify(filteredFavorites))
    setFavorites(filteredFavorites)
  }

  const onCityPress = (city: WeatherData) => navigate('CityWeather', { city })

  useEffect(() => {
    readItemsFromFavorites()
  }, [])

  return (
    <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
      <TextInput
        placeholder='Enter the city'
        onChangeText={() => setCities([])}
        onSubmitEditing={({ nativeEvent }) => getCityData(nativeEvent.text)}
        style={{ marginHorizontal: 16 }}
      />

      <FlatList
        style={{ marginTop: 16, paddingHorizontal: 16 }}
        data={cities}
        ListHeaderComponent={
          <View>
            {favorites.map((item) => {
              return (
                <CityItem
                  key={item.id}
                  isFavorite
                  city={item}
                  onStarPress={() => removeFavorite(item)}
                  onPress={() => onCityPress(item)}
                  style={{ marginBottom: 16 }}
                />
              )
            })}

            {isLoading && <ActivityIndicator />}
          </View>
        }
        renderItem={({ item }) => (
          <CityItem
            city={item}
            onPress={() => onCityPress(item)}
            onStarPress={() => writeItemsToFavorites(item)}
          />
        )}
      />
    </View>
  )
}
