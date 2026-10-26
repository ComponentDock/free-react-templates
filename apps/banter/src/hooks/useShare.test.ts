import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, renderHook } from '@testing-library/react'
import { clearClipboard, clearMatchMedia, clearShare, setClipboard, setMatchMedia, setShare } from '../test/navigator'
import { COPIED_MESSAGE, useShare } from './useShare'

const URL = 'https://example.com/posts/48213'

afterEach(() => {
  clearClipboard()
  clearShare()
  clearMatchMedia()
})

describe('useShare', () => {
  it('copies on a fine pointer when the browser has no matchMedia', async () => {
    const writeText = vi.fn(async () => {})
    const announce = vi.fn()
    setClipboard(writeText)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(writeText).toHaveBeenCalledWith(URL)
    expect(announce).toHaveBeenCalledWith(COPIED_MESSAGE)
    expect(result.current.fallbackUrl).toBe('')
  })

  it('copies when the pointer is fine', async () => {
    const writeText = vi.fn(async () => {})
    const share = vi.fn(async () => {})
    const announce = vi.fn()
    setMatchMedia(false)
    setShare(share)
    setClipboard(writeText)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(writeText).toHaveBeenCalledWith(URL)
    expect(share).not.toHaveBeenCalled()
  })

  it('copies on a coarse pointer when the browser cannot share', async () => {
    const writeText = vi.fn(async () => {})
    const announce = vi.fn()
    setMatchMedia(true)
    setClipboard(writeText)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(writeText).toHaveBeenCalledWith(URL)
    expect(announce).toHaveBeenCalledWith(COPIED_MESSAGE)
  })

  it('opens the native sheet on a coarse pointer and stays silent', async () => {
    const share = vi.fn(async () => {})
    const announce = vi.fn()
    setMatchMedia(true)
    setShare(share)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(share).toHaveBeenCalledWith({ url: URL })
    expect(announce).not.toHaveBeenCalled()
  })

  it('says nothing when the native sheet is dismissed', async () => {
    const share = vi.fn(async () => {
      throw new Error('cancelled')
    })
    const announce = vi.fn()
    setMatchMedia(true)
    setShare(share)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(share).toHaveBeenCalledWith({ url: URL })
    expect(announce).not.toHaveBeenCalled()
    expect(result.current.fallbackUrl).toBe('')
  })

  it('surfaces a selectable URL when the clipboard is unavailable', async () => {
    const announce = vi.fn()
    setMatchMedia(false)

    const { result } = renderHook(() => useShare(URL, announce))

    await act(async () => {
      await result.current.share()
    })

    expect(announce).toHaveBeenCalledWith(`Copy this link: ${URL}`)
    expect(result.current.fallbackUrl).toBe(URL)

    act(() => result.current.dismiss())
    expect(result.current.fallbackUrl).toBe('')
  })
})
