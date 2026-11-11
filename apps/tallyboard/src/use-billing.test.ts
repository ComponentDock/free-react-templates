import { act, renderHook } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useBilling } from './use-billing'
import { COUNT_UP_MS, figureAt } from './lib/ease'
import { ANNUAL_PRICES, MONTHLY_PRICES, STATUS_ANNUAL, STATUS_MONTHLY } from './content'
import { driveFrames } from './test/frames'

afterEach(() => {
  vi.unstubAllGlobals()
})

describe('useBilling', () => {
  it('starts monthly, with no announcement and the monthly figures', () => {
    const { result } = renderHook(() => useBilling())

    expect(result.current.annual).toBe(false)
    expect(result.current.figures).toEqual(MONTHLY_PRICES)
    expect(result.current.status).toBe('')
  })

  it('counts every paid figure down to its annual price over 600 ms', () => {
    const frames = driveFrames()
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())

    expect(result.current.annual).toBe(true)
    expect(result.current.status).toBe(STATUS_ANNUAL)
    expect(frames.pending()).toBe(3)

    act(() => frames.frame(1000))
    expect(result.current.figures).toEqual(MONTHLY_PRICES)

    act(() => frames.frame(1000 + COUNT_UP_MS / 4))
    expect(result.current.figures[1]).toBe(figureAt(15, 12, 0.25))
    expect(result.current.figures[3]).toBe(figureAt(100, 80, 0.25))

    act(() => frames.frame(1000 + COUNT_UP_MS))
    expect(result.current.figures).toEqual(ANNUAL_PRICES)
    expect(frames.pending()).toBe(0)
  })

  it('never animates the free plan', () => {
    const frames = driveFrames()
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())
    act(() => frames.frame(0))
    act(() => frames.frame(COUNT_UP_MS))

    expect(result.current.figures[0]).toBe(0)
  })

  it('restores the monthly figures and its sentence on a second click', () => {
    const frames = driveFrames()
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())
    act(() => frames.frame(0))
    act(() => frames.frame(COUNT_UP_MS))
    act(() => result.current.toggle())

    expect(result.current.annual).toBe(false)
    expect(result.current.status).toBe(STATUS_MONTHLY)

    act(() => frames.frame(2000))
    act(() => frames.frame(2000 + COUNT_UP_MS))

    expect(result.current.figures).toEqual(MONTHLY_PRICES)
  })

  it('cancels an in-flight count and restarts from the figure on screen', () => {
    const frames = driveFrames()
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())
    act(() => frames.frame(0))
    act(() => frames.frame(COUNT_UP_MS / 4))

    const onScreen = result.current.figures[1] as number
    expect(onScreen).toBe(13)

    act(() => result.current.toggle())
    expect(frames.cancelled.length).toBeGreaterThan(0)

    act(() => frames.frame(500))
    expect(result.current.figures[1]).toBe(onScreen)

    act(() => frames.frame(500 + COUNT_UP_MS))
    expect(result.current.figures[1]).toBe(15)
  })

  it('sets the figures in one commit when motion is reduced', () => {
    vi.stubGlobal('matchMedia', (query: string) => ({
      matches: query.includes('reduce'),
      media: query,
      onchange: null,
      addListener: vi.fn(),
      removeListener: vi.fn(),
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    }))
    const frames = driveFrames()
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())

    expect(result.current.figures).toEqual(ANNUAL_PRICES)
    expect(frames.pending()).toBe(0)
    expect(result.current.status).toBe(STATUS_ANNUAL)
  })

  it('sets the figures in one commit when the browser has no animation frame', () => {
    vi.stubGlobal('requestAnimationFrame', undefined)
    const { result } = renderHook(() => useBilling())

    act(() => result.current.toggle())

    expect(result.current.figures).toEqual(ANNUAL_PRICES)
  })

  it('cancels every pending frame when it unmounts', () => {
    const frames = driveFrames()
    const { result, unmount } = renderHook(() => useBilling())

    act(() => result.current.toggle())
    expect(frames.cancelled).toHaveLength(0)

    unmount()

    expect(frames.cancelled).toHaveLength(3)
    expect(frames.pending()).toBe(0)
  })
})
