import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from 'screens'

export type NavStackParams = {
  Home: undefined
}

const Stack = createNativeStackNavigator<NavStackParams>()

export function NavStack() {
  return (
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name='Home'
        component={Home}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}
