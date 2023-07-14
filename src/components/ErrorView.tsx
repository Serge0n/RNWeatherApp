import { Text } from 'components'
import { FallbackProps } from 'react-error-boundary'
import { Button, StyleSheet, View } from 'react-native'

export function ErrorView({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <View style={container}>
      <Text>Oooops!</Text>
      <Text style={errorText}>{error.message}</Text>
      <Button title='Go back' onPress={resetErrorBoundary} />
    </View>
  )
}

const { container, errorText } = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  errorText: { textAlign: 'center', marginVertical: 32 },
})
