import { act, renderHook } from '@testing-library/react'
import { useDisclosure } from './use-disclosure'

describe('the disclosure flag', () => {
  it('opens on demand rather than toggling, and closes and toggles on request', () => {
    const { result } = renderHook(() => useDisclosure())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.open()
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.open()
    })
    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })
    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.close()
    })
    expect(result.current.isOpen).toBe(false)
  })
})
