import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { TOAST_MS, useToast } from './useToast'

describe('useToast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts empty', () => {
    const { result } = renderHook(() => useToast())

    expect(result.current.message).toBe('')
  })

  it('shows a message and clears it after 2,600 ms', () => {
    const { result } = renderHook(() => useToast())

    act(() => result.current.announce('Comment posted.'))
    expect(result.current.message).toBe('Comment posted.')

    act(() => vi.advanceTimersByTime(TOAST_MS - 1))
    expect(result.current.message).toBe('Comment posted.')

    act(() => vi.advanceTimersByTime(1))
    expect(result.current.message).toBe('')
  })

  it('restarts the clock when a second message arrives', () => {
    const { result } = renderHook(() => useToast())

    act(() => result.current.announce('First.'))
    act(() => vi.advanceTimersByTime(1000))
    act(() => result.current.announce('Link copied to clipboard.'))

    expect(result.current.message).toBe('Link copied to clipboard.')

    act(() => vi.advanceTimersByTime(TOAST_MS - 1))
    expect(result.current.message).toBe('Link copied to clipboard.')

    act(() => vi.advanceTimersByTime(1))
    expect(result.current.message).toBe('')
  })

  it('clears its timer on unmount, before and after an announcement', () => {
    const quiet = renderHook(() => useToast())
    quiet.unmount()

    const loud = renderHook(() => useToast())
    act(() => loud.result.current.announce('Comment posted.'))
    loud.unmount()

    act(() => vi.advanceTimersByTime(TOAST_MS))
    expect(vi.getTimerCount()).toBe(0)
  })
})
