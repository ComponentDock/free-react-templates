import { act, renderHook } from '@testing-library/react'
import { CLOSE_REVEAL_MS, SHEET_STATE_CLASS } from './site'
import { useOverlay } from './use-overlay'

/**
 * The hook's two refs are only ever read to tell a press *inside* a surface from one past it, so
 * these tests hand it detached elements rather than rendering a page around it.
 */
function surface(tag = 'nav'): HTMLElement {
  return document.createElement(tag)
}

describe('useOverlay — the sheet’s own state', () => {
  it('starts closed, with the close control still out of the way', () => {
    const { result } = renderHook(() => useOverlay())

    expect(result.current.isOpen).toBe(false)
    expect(result.current.isCloseVisible).toBe(false)
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(false)
  })

  it('opens and closes on the same control, and locks the page while it is up', () => {
    const { result } = renderHook(() => useOverlay())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(true)
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(true)

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isOpen).toBe(false)
    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(false)
  })

  it('hands the lock back to the page when it unmounts', () => {
    const { result, unmount } = renderHook(() => useOverlay())

    act(() => {
      result.current.toggle()
    })

    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(true)

    unmount()

    expect(document.body.classList.contains(SHEET_STATE_CLASS)).toBe(false)
  })

  it('settles the close control in on the design’s own delay, and drops it again on close', () => {
    vi.useFakeTimers()

    const { result } = renderHook(() => useOverlay())

    act(() => {
      result.current.toggle()
    })

    expect(result.current.isCloseVisible).toBe(false)

    act(() => {
      vi.advanceTimersByTime(CLOSE_REVEAL_MS - 1)
    })

    expect(result.current.isCloseVisible).toBe(false)

    act(() => {
      vi.advanceTimersByTime(1)
    })

    expect(result.current.isCloseVisible).toBe(true)

    act(() => {
      result.current.close()
    })

    expect(result.current.isCloseVisible).toBe(false)

    vi.useRealTimers()
  })

  it('takes the sheet down on Escape, and ignores every other key', () => {
    const { result } = renderHook(() => useOverlay())

    act(() => {
      result.current.toggle()
    })

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'a' }))
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('forgives a press on itself or on the burger, and takes down on a press past both', () => {
    const { result } = renderHook(() => useOverlay())

    const sheet = surface()
    const toggle = surface('button')

    act(() => {
      result.current.sheetRef.current = sheet
      result.current.toggleRef.current = toggle as HTMLButtonElement
      result.current.toggle()
    })

    act(() => {
      sheet.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      toggle.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(result.current.isOpen).toBe(true)

    act(() => {
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('is deaf to Escape and to presses past it while it is down', () => {
    const { result } = renderHook(() => useOverlay())

    act(() => {
      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
    })

    expect(result.current.isOpen).toBe(false)
  })

  it('moves focus into the sheet on open, and hands it back to the burger on close', () => {
    const { result } = renderHook(() => useOverlay())

    const sheet = surface()
    const toggle = surface('button')

    // The sheet is focusable in the page itself; a bare detached element needs telling.
    sheet.tabIndex = -1

    document.body.append(sheet, toggle)

    act(() => {
      result.current.sheetRef.current = sheet
      result.current.toggleRef.current = toggle as HTMLButtonElement
    })

    act(() => {
      result.current.toggle()
    })

    expect(document.activeElement).toBe(sheet)

    act(() => {
      result.current.close()
    })

    expect(document.activeElement).toBe(toggle)

    sheet.remove()
    toggle.remove()
  })

  it('leaves focus where it is when the sheet was never holding it', () => {
    const { result } = renderHook(() => useOverlay())

    const outside = surface('button')

    document.body.append(outside)

    act(() => {
      outside.focus()
    })

    act(() => {
      result.current.close()
    })

    expect(document.activeElement).toBe(outside)

    outside.remove()
  })
})
