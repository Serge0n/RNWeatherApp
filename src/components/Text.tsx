import { useTheme } from '@react-navigation/native'
import { Text as RNText, StyleSheet, TextProps } from 'react-native'

export function Text({ style, ...restProps }: TextProps) {
  const { colors } = useTheme()

  const colorStyle = { color: colors.text }

  return <RNText style={[text, colorStyle, style]} {...restProps} />
}

const { text } = StyleSheet.create({
  text: { fontSize: 24 },
})
