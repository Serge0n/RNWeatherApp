import { jest } from '@jest/globals'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'

jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  getVisibilityStatus: jest.fn(),
}))
