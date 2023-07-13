import { useTheme } from '@react-navigation/native'
import { Text as RNText, TextProps } from 'react-native'

export function Text({ style, ...restProps }: TextProps) {
  const { colors } = useTheme()

  return (
    <RNText
      style={[{ color: colors.text, fontSize: 24 }, style]}
      {...restProps}
    />
  )
}
