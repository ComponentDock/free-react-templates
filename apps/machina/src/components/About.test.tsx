import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { About } from './About'
import { ABOUT_TITLE } from '../data'

describe('About', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the intro copy, counter labels, and experience badge', () => {
    vi.useFakeTimers()
    render(<About />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(ABOUT_TITLE)
    expect(screen.getByText('Delivery Packages')).toBeInTheDocument()
    expect(screen.getByText('Countries Covered')).toBeInTheDocument()
    expect(screen.getByText('20')).toBeInTheDocument()
    expect(screen.getByText('Years of experience')).toBeInTheDocument()
  })

  it('animates the counters to their final values', () => {
    vi.useFakeTimers()
    render(<About />)
    act(() => {
      vi.advanceTimersByTime(24)
    })
    act(() => {
      vi.advanceTimersByTime(1500)
    })
    expect(screen.getByText('454 m')).toBeInTheDocument()
    expect(screen.getByText('127')).toBeInTheDocument()
  })

  it('clears the count-up intervals on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<About />)
    unmount()
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(vi.getTimerCount()).toBe(0)
  })
})
