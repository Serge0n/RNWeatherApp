import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native'
import { ErrorView } from 'components'
import { NavStack } from 'navigation'
import { ErrorBoundary } from 'react-error-boundary'
import { StatusBar, useColorScheme } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'

import { SafeAreaProvider } from 'react-native-safe-area-context'

export function App() {
  const isDarkMode = useColorScheme() === 'dark'

  const hideSplash = () => RNBootSplash.hide({ fade: true })

  return (
    <ErrorBoundary fallbackRender={ErrorView}>
      <SafeAreaProvider>
        <NavigationContainer
          onReady={hideSplash}
          theme={isDarkMode ? DarkTheme : DefaultTheme}
        >
          <StatusBar />
          <NavStack />
        </NavigationContainer>
      </SafeAreaProvider>
    </ErrorBoundary>
  )
}
