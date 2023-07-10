import { NavigationContainer } from '@react-navigation/native'
import { NavStack } from 'navigation'
import { StatusBar, useColorScheme } from 'react-native'
import RNBootSplash from 'react-native-bootsplash'
import { Colors } from 'react-native/Libraries/NewAppScreen'

export function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark'

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  }

  const hideSplash = () => RNBootSplash.hide({ fade: true })

  return (
    <NavigationContainer onReady={hideSplash}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />

      <NavStack />
    </NavigationContainer>
  )
}
