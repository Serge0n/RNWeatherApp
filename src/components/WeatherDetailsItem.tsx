import { useTheme } from '@react-navigation/native'
import { Text } from 'components'
import { StyleSheet, View } from 'react-native'

export type WeatherDetailsItemProps = {
  label: string
  value: number
  unit: string
}

export function WeatherDetailsItem({
  label,
  value,
  unit,
}: WeatherDetailsItemProps) {
  const { colors } = useTheme()

  const borderColor = { borderColor: colors.border }

  return (
    <View style={[container, borderColor]}>
      <Text>{label}</Text>
      <Text>{`${value} ${unit}`}</Text>
    </View>
  )
}

const { container } = StyleSheet.create({
  container: {
    width: 150,
    height: 150,
    borderWidth: 2,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
