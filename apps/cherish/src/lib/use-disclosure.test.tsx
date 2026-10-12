import { act, renderHook } from '@testing-library/react'
import { useDisclosure } from './use-disclosure'

describe('useDisclosure — the flag behind a disclosure', () => {
  it('starts closed when the caller asks it to', () => {
    const { result } = renderHook(() => useDisclosure(false))

    expect(result.current.isOpen).toBe(false)
  })

  it('starts open when the caller asks it to', () => {
    const { result } = renderHook(() => useDisclosure(true))

    expect(result.current.isOpen).toBe(true)
  })

  it('opens, closes and toggles both ways', () => {
    const { result } = renderHook(() => useDisclosure(false))

    act(() => {
      result.current.open()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toBe(false)
  })
})
