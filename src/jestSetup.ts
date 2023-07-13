import { jest } from '@jest/globals'
import mockAsyncStorage from '@react-native-async-storage/async-storage/jest/async-storage-mock'
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock'

jest.mock('react-native/Libraries/Animated/NativeAnimatedHelper')
jest.mock('react-native-safe-area-context', () => mockSafeAreaContext)
jest.mock('@react-native-async-storage/async-storage', () => mockAsyncStorage)
jest.mock('react-native-bootsplash', () => ({
  hide: jest.fn(),
  getVisibilityStatus: jest.fn(),
}))
