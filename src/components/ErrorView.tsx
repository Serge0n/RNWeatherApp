import { Text } from 'components'
import { FallbackProps } from 'react-error-boundary'
import { Button, View } from 'react-native'

export function ErrorView({ error, resetErrorBoundary }: FallbackProps) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Oooops!</Text>
      <Text style={{ textAlign: 'center', marginVertical: 32 }}>
        {error.message}
      </Text>
      <Button title='Go back' onPress={resetErrorBoundary} />
    </View>
  )
}
