import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { DealsOfTheDay, CountdownTimer } from './DealsOfTheDay'

describe('DealsOfTheDay', () => {
  it('renders section title', () => {
    render(<DealsOfTheDay />)
    expect(screen.getByText('Deals Of The Day')).toBeInTheDocument()
  })

  it('renders countdown timer units', () => {
    render(<DealsOfTheDay />)
    expect(screen.getByText('Days')).toBeInTheDocument()
    expect(screen.getByText('Hours')).toBeInTheDocument()
    expect(screen.getByText('Mins')).toBeInTheDocument()
    expect(screen.getByText('Secs')).toBeInTheDocument()
  })

  it('renders deal products', () => {
    render(<DealsOfTheDay />)
    expect(screen.getByText('Bluetooth Speaker')).toBeInTheDocument()
    expect(screen.getByText('Yoga Mat')).toBeInTheDocument()
    expect(screen.getByText('Coffee Maker')).toBeInTheDocument()
    expect(screen.getByText('Desk Lamp')).toBeInTheDocument()
    expect(screen.getByText('Water Bottle')).toBeInTheDocument()
    expect(screen.getByText('Notebook Set')).toBeInTheDocument()
  })

  it('counts down seconds', async () => {
    vi.useFakeTimers()
    render(<DealsOfTheDay />)
    const secsBefore = screen.getAllByText(/\d{2}/).map((el) => el.textContent)
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    const secsAfter = screen.getAllByText(/\d{2}/).map((el) => el.textContent)
    // At least one value should have changed
    expect(secsAfter).not.toEqual(secsBefore)
    vi.useRealTimers()
  })

  it('does not create timer when countdown is zero', () => {
    vi.useFakeTimers()
    render(<CountdownTimer initialSeconds={0} />)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Days')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
