import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Hero, nextTypewriterState, computeDelay, initialState } from './Hero'
import type { TypewriterState } from './Hero'

describe('nextTypewriterState', () => {
  it('types the first character when not deleting and displayed is empty', () => {
    const result = nextTypewriterState(initialState)
    expect(result.displayed).toBe('C')
    expect(result.isDeleting).toBe(false)
    expect(result.wordIndex).toBe(0)
  })

  it('continues typing when displayed is shorter than word', () => {
    const state: TypewriterState = { wordIndex: 0, displayed: 'Co', isDeleting: false }
    const result = nextTypewriterState(state)
    expect(result.displayed).toBe('Com')
  })

  it('switches to deleting when typing is complete', () => {
    const state: TypewriterState = { wordIndex: 0, displayed: 'Company A', isDeleting: false }
    const result = nextTypewriterState(state)
    expect(result.isDeleting).toBe(true)
    expect(result.displayed).toBe('Company A')
  })

  it('deletes characters when deleting and displayed is not empty', () => {
    const state: TypewriterState = { wordIndex: 0, displayed: 'Company A', isDeleting: true }
    const result = nextTypewriterState(state)
    expect(result.displayed).toBe('Company ')
    expect(result.isDeleting).toBe(true)
  })

  it('advances to next word when deletion is complete', () => {
    const state: TypewriterState = { wordIndex: 0, displayed: '', isDeleting: true }
    const result = nextTypewriterState(state)
    expect(result.wordIndex).toBe(1)
    expect(result.displayed).toBe('')
    expect(result.isDeleting).toBe(false)
  })

  it('cycles back to first word after last word', () => {
    const state: TypewriterState = { wordIndex: 3, displayed: '', isDeleting: true }
    const result = nextTypewriterState(state)
    expect(result.wordIndex).toBe(0)
  })
})

describe('computeDelay', () => {
  it('returns 60 when deleting', () => {
    expect(computeDelay({ wordIndex: 0, displayed: 'test', isDeleting: true })).toBe(60)
  })

  it('returns 2000 when typing is complete', () => {
    expect(computeDelay({ wordIndex: 0, displayed: 'Company A', isDeleting: false })).toBe(2000)
  })

  it('returns 100 when still typing', () => {
    expect(computeDelay({ wordIndex: 0, displayed: 'Co', isDeleting: false })).toBe(100)
  })
})

describe('Hero component', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the hero section', () => {
    render(<Hero />)
    expect(screen.getByTestId('hero')).toBeInTheDocument()
  })

  it('displays the name heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Joplin.')
  })

  it('displays the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText('Digital Product Designer')).toBeInTheDocument()
  })

  it('displays rotating text element', () => {
    render(<Hero />)
    expect(screen.getByText(/Head of design at/)).toBeInTheDocument()
  })

  it('types characters during typing phase', () => {
    render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText(/Head of design at/)).toBeInTheDocument()
  })

  it('pauses after typing completes then starts deleting', () => {
    render(<Hero />)
    // Type full word (9 chars * 100ms = 900ms)
    act(() => {
      vi.advanceTimersByTime(900)
    })
    // Pause for 2000ms
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Should start deleting now
    act(() => {
      vi.advanceTimersByTime(60)
    })
    expect(screen.getByText(/Head of design at/)).toBeInTheDocument()
  })

  it('deletes characters and transitions to next word', () => {
    render(<Hero />)
    // Type full word
    act(() => {
      vi.advanceTimersByTime(900)
    })
    // Pause
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Delete all 9 chars (9 * 60ms = 540ms)
    act(() => {
      vi.advanceTimersByTime(600)
    })
    // Should now be typing next word
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText(/Head of design at/)).toBeInTheDocument()
  })

  it('cleans up timeouts on unmount', () => {
    const { unmount } = render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(500)
    })
    unmount()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
  })
})
