import { useTheme } from '@react-navigation/native'
import { Text } from 'components'
import {
  Pressable,
  PressableProps,
  StyleProp,
  View,
  ViewStyle,
} from 'react-native'
import AntDesignIcon from 'react-native-vector-icons/AntDesign'

type CityItemProps = {
  city: any
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
      <View
        style={{
          marginRight: 16,
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
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
