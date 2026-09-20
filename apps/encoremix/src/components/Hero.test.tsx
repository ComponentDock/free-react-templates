import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Hero, Countdown } from './Hero'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders all time units', () => {
    const future = new Date(Date.now() + 86400000 * 2 + 3600000 * 5 + 60000 * 30 + 15000)
    render(<Countdown targetDate={future} />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Minutes')).toBeInTheDocument()
    expect(screen.getByText('Seconds')).toBeInTheDocument()
  })

  it('shows zeroed values when target is in the past', () => {
    const past = new Date(Date.now() - 1000)
    render(<Countdown targetDate={past} />)
    const zeros = screen.getAllByText('00')
    expect(zeros.length).toBe(4)
  })

  it('updates when interval ticks', () => {
    const future = new Date(Date.now() + 5000)
    render(<Countdown targetDate={future} />)
    expect(screen.getByText('05')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('04')).toBeInTheDocument()
  })
})

describe('Hero', () => {
  it('renders headline and CTA buttons', () => {
    render(<Hero />)
    expect(screen.getByText('Hello world!')).toBeInTheDocument()
    expect(screen.getByText('Buy Tickets')).toBeInTheDocument()
    expect(screen.getByText('See Lineup')).toBeInTheDocument()
  })

  it('renders event date', () => {
    render(<Hero />)
    expect(screen.getByText(/June 15–17, 2026/)).toBeInTheDocument()
  })

  it('renders countdown section', () => {
    render(<Hero />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
  })
})
