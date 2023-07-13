import { useRoute } from '@react-navigation/native'
import { Text, WeatherDetailsItem, WeatherDetailsItemProps } from 'components'
import { NavStackProps } from 'navigation'
import { ScrollView, View } from 'react-native'

export function CityWeather() {
  const { city } = useRoute<NavStackProps<'CityWeather'>['route']>().params

  const weatherDetails: WeatherDetailsItemProps[] = [
    { label: 'Feels like', value: city.main.feels_like, unit: '°C' },
    { label: 'Humidity', value: city.main.humidity, unit: '%' },
    { label: 'Wind', value: city.wind.speed, unit: 'km/h' },
    { label: 'Air pressure', value: city.main.pressure, unit: 'mmHg' },
  ]

  return (
    <ScrollView
      style={{ flex: 1, paddingTop: 32, paddingHorizontal: 16 }}
      contentContainerStyle={{ alignItems: 'center' }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          marginBottom: 32,
        }}
      >
        <Text style={{ fontSize: 64 }}>{`${city.main.temp} °`}</Text>
        <Text style={{ fontSize: 32 }}>{city.weather[0].main}</Text>
      </View>

      <Text>Weather details</Text>

      <View
        style={{
          marginTop: 32,
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          rowGap: 24,
        }}
      >
        {weatherDetails.map((item) => (
          <WeatherDetailsItem {...item} key={item.label} />
        ))}
      </View>
    </ScrollView>
  )
}
