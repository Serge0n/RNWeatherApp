import { describe, it } from '@jest/globals'
import { render } from '@testing-library/react-native'
import { App } from '../App'

describe('App', () => {
  it('renders correctly', () => {
    render(<App />)
  })
})
