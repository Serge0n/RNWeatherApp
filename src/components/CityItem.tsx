import { useTheme } from '@react-navigation/native'
import { WeatherData } from 'api'
import { Text } from 'components'
import {
  Pressable,
  PressableProps,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

type CityItemProps = {
  city: WeatherData
  isFavorite?: boolean
  onStarPress: () => void
  style?: StyleProp<ViewStyle>
} & Omit<PressableProps, 'style'>

export function CityItem({
  isFavorite = false,
  city,
  onPress,
  onStarPress,
  style,
  ...restProps
}: CityItemProps) {
  const { colors } = useTheme()

  const borderColor = { borderColor: colors.border }

  return (
    <Pressable
      style={({ pressed }) => [
        pressable,
        borderColor,
        { opacity: pressed ? 0.5 : 1.0 },
        style,
      ]}
      onPress={onPress}
      {...restProps}
    >
      <View style={view}>
        <Text>{`${city.name}, ${city.sys.country}`}</Text>
        <Text>{`${city.main.temp} °C`}</Text>
      </View>

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

const { pressable, view } = StyleSheet.create({
  pressable: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  view: {
    marginRight: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})
