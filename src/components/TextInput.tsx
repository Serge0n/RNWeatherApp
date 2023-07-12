import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  View,
  ViewStyle,
} from 'react-native'

type TextInputProps = RNTextInputProps & { containerStyle?: ViewStyle }

export function TextInput({
  style,
  containerStyle,
  onFocus,
  onBlur,
  ...restProps
}: TextInputProps) {
  const { colors } = useTheme()
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={containerStyle}>
      <RNTextInput
        onFocus={(e) => {
          setIsFocused(true)
          onFocus?.(e)
        }}
        onBlur={(e) => {
          setIsFocused(false)
          onBlur?.(e)
        }}
        style={[
          {
            color: colors.text,
            borderColor: isFocused ? colors.primary : colors.border,
            borderWidth: 3,
            padding: 8,
          },
          style,
        ]}
        {...restProps}
      />
    </View>
  )
}
