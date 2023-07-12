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
            fontSize: 24,
            color: colors.text,
            borderRadius: 8,
            borderColor: isFocused ? colors.primary : colors.border,
            borderWidth: 3,
            paddingHorizontal: 8,
            paddingVertical: 12,
          },
          style,
        ]}
        {...restProps}
      />
    </View>
  )
}
