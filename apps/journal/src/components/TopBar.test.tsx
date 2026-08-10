import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { headerSocials, tickerHeadlines, tickerRotateMs } from '../data'
import { TopBar } from './TopBar'

describe('TopBar', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the breaking-news ticker and all six social icons', () => {
    render(<TopBar />)

    expect(screen.getByText(tickerHeadlines[0]!)).toBeInTheDocument()
    for (const social of headerSocials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
  })

  it('rotates the ticker headline after the interval', () => {
    render(<TopBar />)

    act(() => {
      vi.advanceTimersByTime(tickerRotateMs)
    })

    expect(screen.getByText(tickerHeadlines[1]!)).toBeInTheDocument()
  })

  it('wraps around to the first headline after the last one', () => {
    render(<TopBar />)

    act(() => {
      vi.advanceTimersByTime(tickerRotateMs * tickerHeadlines.length)
    })

    expect(screen.getByText(tickerHeadlines[0]!)).toBeInTheDocument()
  })

  it('clears the rotation timer on unmount', () => {
    const { unmount } = render(<TopBar />)
    unmount()

    act(() => {
      vi.advanceTimersByTime(tickerRotateMs)
    })
    expect(screen.queryByText(tickerHeadlines[1]!)).not.toBeInTheDocument()
  })
})
