import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { UpcomingFighter } from './UpcomingFighter'

describe('UpcomingFighter', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the section heading and fighter name', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T00:00:00Z'))
    render(<UpcomingFighter />)
    expect(screen.getByRole('heading', { name: /Upcoming Fighter/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Dark Dragon' })).toBeInTheDocument()
  })

  it('shows a countdown timer with day/hour/minute/second blocks', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T00:00:00Z'))
    render(<UpcomingFighter />)
    expect(screen.getByText('Day')).toBeInTheDocument()
    expect(screen.getByText('Hour')).toBeInTheDocument()
    expect(screen.getByText('Minute')).toBeInTheDocument()
    expect(screen.getByText('Second')).toBeInTheDocument()
    expect(screen.getByText('17')).toBeInTheDocument()
  })

  it('updates the countdown every second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-31T23:59:30Z'))
    render(<UpcomingFighter />)
    expect(screen.getByText('30')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('29')).toBeInTheDocument()
  })

  it('shows an open button', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-08-15T00:00:00Z'))
    render(<UpcomingFighter />)
    expect(screen.getByRole('link', { name: 'Open' })).toHaveAttribute('href', '#pricing')
  })
})
