import { describe, expect, it } from '@jest/globals'
import { NavigationContainer } from '@react-navigation/native'
import { render, screen } from '@testing-library/react-native'
import { NavStack } from 'navigation'

describe('Home', () => {
  it('renders Input', async () => {
    const component = (
      <NavigationContainer>
        <NavStack />
      </NavigationContainer>
    )

    render(component)

    const input = await screen.findByPlaceholderText('Enter the city')
    expect(input).toBeTruthy()
  })
})
