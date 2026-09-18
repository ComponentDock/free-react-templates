import { renderHook, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { useTypedText } from './useTypedText'

describe('useTypedText', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('starts with empty text and typing phase', () => {
    const { result } = renderHook(() => useTypedText())
    expect(result.current.typedText).toBe('')
    expect(result.current.phase).toBe('typing')
    expect(result.current.charIdx).toBe(0)
  })

  it('types characters during typing phase', () => {
    const { result } = renderHook(() => useTypedText())
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(result.current.typedText).toBe('A')
    expect(result.current.charIdx).toBe(1)
  })

  it('transitions to pause after fully typing word', () => {
    const { result } = renderHook(() => useTypedText())
    // Each char takes 100ms. Advance one char at a time to avoid
    // the effect cleanup race with vi.advanceTimersByTime.
    for (let i = 0; i < 11; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    expect(result.current.typedText).toBe('Attractions')
    expect(result.current.phase).toBe('pause')
  })

  it('transitions from pause to deleting', () => {
    const { result } = renderHook(() => useTypedText())
    // Type full word
    for (let i = 0; i < 11; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    expect(result.current.phase).toBe('pause')
    // Pause to deleting (100ms)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(result.current.phase).toBe('deleting')
  })

  it('deletes characters during deleting phase', () => {
    const { result } = renderHook(() => useTypedText())
    // Type full word + pause
    for (let i = 0; i < 11; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    act(() => {
      vi.advanceTimersByTime(100)
    })
    // Delete one char (60ms)
    act(() => {
      vi.advanceTimersByTime(60)
    })
    expect(result.current.typedText).toBe('Attraction')
    expect(result.current.charIdx).toBe(9)
  })

  it('transitions from deleting back to typing with next word', () => {
    const { result } = renderHook(() => useTypedText())
    // Type full word
    for (let i = 0; i < 11; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    // Pause
    act(() => {
      vi.advanceTimersByTime(100)
    })
    // Delete all 11 chars
    for (let i = 0; i < 11; i++) {
      act(() => {
        vi.advanceTimersByTime(60)
      })
    }
    // Now charIdx=0, should transition to typing next word
    expect(result.current.phase).toBe('typing')
    expect(result.current.wordIdx).toBe(1)
    expect(result.current.typedText).toBe('')
  })

  it('cycles through all words', () => {
    const { result } = renderHook(() => useTypedText())

    function typeWord(len: number) {
      for (let i = 0; i < len; i++) {
        act(() => {
          vi.advanceTimersByTime(100)
        })
      }
    }
    function deleteWord(len: number) {
      for (let i = 0; i < len; i++) {
        act(() => {
          vi.advanceTimersByTime(60)
        })
      }
    }

    // "Attractions" (11)
    typeWord(11)
    act(() => {
      vi.advanceTimersByTime(100)
    }) // pause
    deleteWord(11)
    expect(result.current.wordIdx).toBe(1)

    // "Events" (6)
    typeWord(6)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    deleteWord(6)
    expect(result.current.wordIdx).toBe(2)

    // "Hotels" (6)
    typeWord(6)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    deleteWord(6)
    expect(result.current.wordIdx).toBe(3)

    // "Restaurants" (11) — wraps to 0
    typeWord(11)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    deleteWord(11)
    expect(result.current.wordIdx).toBe(0)
  })
})
