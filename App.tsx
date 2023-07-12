import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { NavStack } from 'navigation'
import { StatusBar, useColorScheme } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { SafeAreaProvider } from 'react-native-safe-area-context'

export function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const hideSplash = () => RNBootSplash.hide({ fade: true })

  return (
    <SafeAreaProvider>
      <NavigationContainer
        onReady={hideSplash}
        theme={isDarkMode ? DarkTheme : DefaultTheme}
      >
        <StatusBar />
        <NavStack />
      </NavigationContainer>
    </SafeAreaProvider>
  )
}
