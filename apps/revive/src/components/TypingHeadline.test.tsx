import { render, screen, act } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { TypingHeadline } from './TypingHeadline'

describe('TypingHeadline', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the typing headline container', () => {
    const { container } = render(<TypingHeadline />)
    expect(container.querySelector('.text-brand')).toBeInTheDocument()
  })

  it('shows cursor element', () => {
    const { container } = render(<TypingHeadline />)
    const cursor = container.querySelector('[aria-hidden="true"]')
    expect(cursor).toBeInTheDocument()
  })

  it('types characters one at a time', () => {
    render(<TypingHeadline />)
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText('w')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText('we')).toBeInTheDocument()
  })

  it('completes typing and pauses before deleting', () => {
    render(<TypingHeadline />)
    // Type "web resources" (13 chars)
    for (let i = 0; i < 13; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    expect(screen.getByText('web resources')).toBeInTheDocument()
    // Pause transition: setTimeout(0) -> setIsPaused(true)
    act(() => {
      vi.advanceTimersByTime(1)
    })
    // Pause duration: setTimeout(2000) -> setIsPaused(false), setIsDeleting(true)
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // First delete
    act(() => {
      vi.advanceTimersByTime(60)
    })
    expect(screen.getByText('web resource')).toBeInTheDocument()
  })

  it('deletes all chars and cycles to next word', () => {
    render(<TypingHeadline />)
    // Type all 13
    for (let i = 0; i < 13; i++) {
      act(() => {
        vi.advanceTimersByTime(100)
      })
    }
    // Pause
    act(() => {
      vi.advanceTimersByTime(1)
    })
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    // Delete all 13
    for (let i = 0; i < 13; i++) {
      act(() => {
        vi.advanceTimersByTime(60)
      })
    }
    // Empty string — cycle to next word
    act(() => {
      vi.advanceTimersByTime(1)
    })
    // Start typing "psd files"
    act(() => {
      vi.advanceTimersByTime(100)
    })
    expect(screen.getByText('p')).toBeInTheDocument()
  })
})
