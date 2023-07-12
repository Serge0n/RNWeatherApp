import {
  NativeStackScreenProps,
  createNativeStackNavigator,
} from '@react-navigation/native-stack'
import { CityWeather, Home } from 'screens'

export type NavStackParams = {
  Home: undefined
  CityWeather: undefined
}

export type NavStackProps<Screen extends keyof NavStackParams> =
  NativeStackScreenProps<NavStackParams, Screen>

const Stack = createNativeStackNavigator<NavStackParams>()

export function NavStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='CityWeather'
        component={CityWeather}
        options={{ headerShown: true }}
      />
    </Stack.Navigator>
  )
}
