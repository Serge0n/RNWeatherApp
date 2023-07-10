import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { NavStack } from 'navigation'
import { StatusBar, useColorScheme } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

export function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const hideSplash = () => RNBootSplash.hide({ fade: true })

  return (
    <NavigationContainer
      onReady={hideSplash}
      theme={isDarkMode ? DarkTheme : DefaultTheme}>
      <StatusBar />
      <NavStack />
    </NavigationContainer>
  )
}
