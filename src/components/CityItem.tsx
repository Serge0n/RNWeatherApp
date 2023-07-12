import { useTheme } from '@react-navigation/native'
import { Text } from 'components'
import { Pressable, PressableProps, StyleProp, ViewStyle } from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

type CityItemProps = {
  city: any
  isFavorite?: boolean
  onStarPress: () => void
  style?: StyleProp<ViewStyle>
} & PressableProps

export function CityItem({
  isFavorite = false,
  city,
  onPress,
  onStarPress,
  style,
  ...restProps
}: CityItemProps) {
  const { colors } = useTheme()

  return (
    <Pressable
      style={({ pressed }) => [
        {
          padding: 16,
          borderWidth: 2,
          borderRadius: 8,
          borderColor: colors.border,
          opacity: pressed ? 0.5 : 1.0,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        },
        style,
      ]}
      onPress={onPress}
      {...restProps}
    >
      <Text>{`${city.name}, ${city.sys.country}, ${city.main.temp} °C, ${city.weather[0].main}`}</Text>
      <Pressable onPress={onStarPress}>
        <AntDesignIcon
          name='star'
          size={30}
          color={isFavorite ? colors.text : colors.border}
        />
      </Pressable>
    </Pressable>
  )
}
