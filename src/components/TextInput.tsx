import { useTheme } from '@react-navigation/native'
import { useState } from 'react'
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
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

  const dynamicTypes = {
    color: colors.text,
    borderColor: isFocused ? colors.primary : colors.border,
  }

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
        style={[textInput, dynamicTypes, style]}
        {...restProps}
      />
    </View>
  )
}

const { textInput } = StyleSheet.create({
  textInput: {
    fontSize: 24,
    borderRadius: 8,
    borderWidth: 3,
    paddingHorizontal: 8,
    paddingVertical: 12,
  },
})
