import { useTheme } from '@react-navigation/native'
import { Text } from 'components'
import { Pressable, PressableProps } from 'react-native'

interface CityItemProps {
  city: any
  onPress: PressableProps['onPress']
}

export function CityItem({ city, onPress }: CityItemProps) {
  const { colors } = useTheme()

  return (
    <Pressable
      style={({ pressed }) => [
        {
          padding: 16,
          borderWidth: 2,
          borderColor: colors.border,
          opacity: pressed ? 0.5 : 1.0,
        },
      ]}
      onPress={onPress}
    >
      <Text>{`${city.name}, ${city.sys.country}, ${city.main.temp} °C, ${city.weather[0].main}`}</Text>
    </Pressable>
  )
}
