import { useRoute } from '@react-navigation/native'
import { Text, WeatherDetailsItem, WeatherDetailsItemProps } from 'components'
import { NavStackProps } from 'navigation'
import { ScrollView, StyleSheet, View } from 'react-native'

export function CityWeather() {
  const { city } = useRoute<NavStackProps<'CityWeather'>['route']>().params

  const weatherDetails: WeatherDetailsItemProps[] = [
    { label: 'Feels like', value: city.main.feels_like, unit: '°C' },
    { label: 'Humidity', value: city.main.humidity, unit: '%' },
    { label: 'Wind', value: city.wind.speed, unit: 'km/h' },
    { label: 'Air pressure', value: city.main.pressure, unit: 'mmHg' },
  ]

  return (
    <ScrollView style={scrollView} contentContainerStyle={scrollViewContainer}>
      <View style={mainInfoContainer}>
        <Text style={degreesText}>{`${city.main.temp} °`}</Text>
        <Text style={mainWeatherText}>{city.weather[0].main}</Text>
      </View>

      <Text>Weather details</Text>

      <View style={weatherDetailsContainer}>
        {weatherDetails.map((item) => (
          <WeatherDetailsItem {...item} key={item.label} />
        ))}
      </View>
    </ScrollView>
  )
}

const {
  scrollView,
  scrollViewContainer,
  mainInfoContainer,
  degreesText,
  mainWeatherText,
  weatherDetailsContainer,
} = StyleSheet.create({
  scrollView: { flex: 1, paddingTop: 32, paddingHorizontal: 16 },
  scrollViewContainer: { alignItems: 'center' },
  mainInfoContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 32,
  },
  degreesText: { fontSize: 64 },
  mainWeatherText: { fontSize: 32 },
  weatherDetailsContainer: {
    marginTop: 32,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    rowGap: 24,
  },
})
