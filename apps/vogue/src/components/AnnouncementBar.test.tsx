import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AnnouncementBar } from './AnnouncementBar'
import { promos } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('AnnouncementBar', () => {
  it('shows the first promo with polite live region', () => {
    render(<AnnouncementBar />)
    expect(screen.getByText(promos[0]!)).toBeInTheDocument()
    expect(screen.getByText(promos[0]!)).toHaveAttribute('aria-live', 'polite')
  })

  it('rotates through all promos every 4 seconds and wraps around', () => {
    vi.useFakeTimers()
    render(<AnnouncementBar />)
    expect(screen.getByText(promos[0]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText(promos[1]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText(promos[2]!)).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(screen.getByText(promos[0]!)).toBeInTheDocument()
  })

  it('cleans up its interval on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<AnnouncementBar />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(12000)
    })
    expect(screen.queryByText(promos[1]!)).not.toBeInTheDocument()
  })
})
