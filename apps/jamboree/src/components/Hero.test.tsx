import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { Hero, getTimeRemaining } from './Hero'

describe('getTimeRemaining', () => {
  it('returns an object with days, hours, minutes, seconds', () => {
    const result = getTimeRemaining()
    expect(typeof result.days).toBe('number')
    expect(typeof result.hours).toBe('number')
    expect(typeof result.minutes).toBe('number')
    expect(typeof result.seconds).toBe('number')
  })
})

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<Hero />)
    expect(screen.getByText(/our next event starts in/i)).toBeDefined()
  })

  it('renders countdown units', () => {
    render(<Hero />)
    for (const unit of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(screen.getByText(unit)).toBeDefined()
    }
  })

  it('renders the Buy Ticket button', () => {
    render(<Hero />)
    expect(screen.getByText('Buy Ticket')).toBeDefined()
  })

  it('has a link to upcoming events', () => {
    render(<Hero />)
    const link = screen.getByText('Buy Ticket').closest('a')
    expect(link?.getAttribute('href')).toBe('#upcoming-event')
  })

  it('displays countdown values as two-digit strings', () => {
    render(<Hero />)
    const days = screen.getByText('Days').previousElementSibling
    expect(days?.textContent?.length).toBe(2)
  })

  it('updates the countdown when the interval fires', async () => {
    vi.useFakeTimers()
    render(<Hero />)
    await act(async () => {
      vi.advanceTimersByTime(2000)
    })
    const days = screen.getByText('Days').previousElementSibling
    expect(days?.textContent?.length).toBe(2)
  })
})
