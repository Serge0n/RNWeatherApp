import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { CityWeather, Home } from 'screens'

export type NavStackParams = {
  Home: undefined
  CityWeather: { city: any }
}

export type NavStackProps<Screen extends keyof NavStackParams> =
  NativeStackScreenProps<NavStackParams, Screen>

const { Navigator, Screen } = createNativeStackNavigator<NavStackParams>()

export function NavStack() {
  return (
    <Navigator initialRouteName='Home'>
      <Screen name='Home' component={Home} options={{ headerShown: false }} />
      <Screen
        name='CityWeather'
        component={CityWeather}
        options={({ route }) => ({ title: route.params.city.name })}
      />
    </Navigator>
  )
}
