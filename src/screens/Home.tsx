import { useAsyncStorage } from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
import { CityItem, TextInput } from 'components'
import { NavStackProps } from 'navigation'
import { useEffect, useState } from 'react'
import { useErrorBoundary } from 'react-error-boundary'
import { ActivityIndicator, FlatList, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'

const API_URL = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = '889f0cd84330b182bf974584d4b2966d'

export function Home() {
  const { navigate } = useNavigation<NavStackProps<'Home'>['navigation']>()
  const [isLoading, setIsLoading] = useState(false)
  const { top, bottom } = useSafeAreaInsets()
  const [cities, setCities] = useState<Array<any>>([])
  const [favorites, setFavorites] = useState<Array<any>>([])
  const { getItem, setItem } = useAsyncStorage('favorites')
  const { showBoundary } = useErrorBoundary()

  const getCities = async (city: string) => {
    try {
      setIsLoading(true)
      const response = await fetch(
        `${API_URL}?q=${city}&units=metric&appid=${API_KEY}`,
      )
      const cityData = await response.json()
      const isDuplicate = favorites.some((item) => item.id === cityData.id)

      !isDuplicate && setCities([cityData])
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

  const writeItemsToFavorites = async (newValue: any) => {
    await setItem(JSON.stringify([...favorites, newValue]))
    setFavorites([...favorites, newValue])
    setCities([])
  }

  const removeFavorite = async (newValue: any) => {
    const filteredFavorites = favorites.filter(
      (item) => newValue.id !== item.id,
    )
    await setItem(JSON.stringify(filteredFavorites))
    setFavorites(filteredFavorites)
  }

  const onCityPress = (city: any) => navigate('CityWeather', { city })

  useEffect(() => {
    readItemsFromFavorites()
  }, [])

  return (
    <View style={{ flex: 1, paddingTop: top, paddingBottom: bottom }}>
      <TextInput
        placeholder='Enter the city'
        onChangeText={() => setCities([])}
        onSubmitEditing={({ nativeEvent }) => getCities(nativeEvent.text)}
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
