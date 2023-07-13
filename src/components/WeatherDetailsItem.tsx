import { useTheme } from '@react-navigation/native'
import { Text } from 'components'
import { View } from 'react-native'

export type WeatherDetailsItemProps = Record<'label' | 'value' | 'unit', string>

export function WeatherDetailsItem({
  label,
  value,
  unit,
}: WeatherDetailsItemProps) {
  const { colors } = useTheme()

  return (
    <View
      style={{
        width: 150,
        height: 150,
        borderWidth: 2,
        borderRadius: 8,
        borderColor: colors.border,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text>{label}</Text>
      <Text>{`${value} ${unit}`}</Text>
    </View>
  )
}
