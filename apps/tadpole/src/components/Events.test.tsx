import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Events } from './Events'

describe('Events', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the event title', () => {
    render(<Events />)
    expect(screen.getByText('Annual Winter Festival')).toBeInTheDocument()
  })

  it('renders countdown labels', () => {
    render(<Events />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('renders the RSVP button', () => {
    render(<Events />)
    expect(screen.getByText('RSVP Now')).toBeInTheDocument()
  })

  it('updates countdown over time', () => {
    render(<Events />)
    const secondsEl = screen.getByText('Seconds')
    const container = secondsEl.closest('div')!
    const valueBefore = container.querySelector('p')!.textContent

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    const valueAfter = container.querySelector('p')!.textContent
    expect(valueAfter).not.toBe(valueBefore)
  })
})
