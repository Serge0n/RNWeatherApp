import { describe, expect, it, jest } from '@jest/globals'
import { render, screen } from '@testing-library/react-native'
import 'react-native'
import { hide } from 'react-native-bootsplash'
import { App } from '../App'

const mockedUseColorScheme = jest.fn()
jest.mock('react-native/Libraries/Utilities/useColorScheme', () => ({
  default: mockedUseColorScheme,
}))

describe('App', () => {
  it('hides Splash Screen ', () => {
    render(<App />)
    expect(hide).toBeCalledTimes(1)
  })
  it('renders correctly with dark theme', () => {
    mockedUseColorScheme.mockReturnValue('dark')
    render(<App />).toJSON()
    expect(screen).toMatchSnapshot()
  })
  it('renders correctly with light theme', () => {
    mockedUseColorScheme.mockReturnValue('light')
    render(<App />).toJSON()
    expect(screen).toMatchSnapshot()
  })
})
