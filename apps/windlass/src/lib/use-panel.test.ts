import { act, renderHook } from '@testing-library/react'
import { PANEL_RESET_QUERY, usePanel } from './use-panel'
import { mockMatchMedia } from '../test/match-media'

/** The key the panel listens for, so the test speaks the same language as the hook. */
function pressEscape() {
  document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
}

describe('usePanel — the collapsing panel as one flag and its two closing paths', () => {
  it('starts folded and unfolds and folds again on the toggler', () => {
    const { result } = renderHook(() => usePanel())

    expect(result.current.isOpen).toBe(false)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('folds itself away on Escape, and ignores every other key', () => {
    const { result } = renderHook(() => usePanel())

    act(() => {
      result.current.toggle()
    })

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    })

    expect(result.current.isOpen).toBe(true)

    act(pressEscape)

    expect(result.current.isOpen).toBe(false)
  })

  it('closes itself outright, the way a chosen destination asks it to', () => {
    const { result } = renderHook(() => usePanel())

    act(() => {
      result.current.toggle()
    })

    act(() => {
      result.current.close()
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('drops the panel once the viewport passes the width the card’s own list takes over', () => {
    const query = mockMatchMedia(PANEL_RESET_QUERY, false)
    const { result } = renderHook(() => usePanel())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)

    // A change that does not match the query — the panel stays exactly where it was.
    act(() => {
      query.change(false)
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      query.change(true)
    })

    expect(result.current.isOpen).toBe(false)
  })
})
