import { act } from 'react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Countdown } from './Countdown'
import { countdown } from '../data'

const BEFORE = '2027-02-20T12:00:00Z'

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(BEFORE)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading, four live units and the Get Started CTA', () => {
    const { container } = render(<Countdown />)

    expect(screen.getByText(countdown.kicker)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: countdown.title })).toBeInTheDocument()

    // Target is 8 days 12 hours after the pinned "now".
    expect(container.querySelector('[data-unit="days"]')!.textContent).toBe('08')
    expect(container.querySelector('[data-unit="hours"]')!.textContent).toBe('12')
    expect(container.querySelector('[data-unit="minutes"]')!.textContent).toBe('00')
    expect(container.querySelector('[data-unit="seconds"]')!.textContent).toBe('00')

    for (const label of countdown.labels) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }

    expect(screen.getByRole('link', { name: countdown.ctaLabel })).toBeInTheDocument()
  })

  it('ticks down in real time', () => {
    const { container } = render(<Countdown />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })

    // 8 days 11:59:59 remaining → seconds now read 59.
    expect(container.querySelector('[data-unit="seconds"]')!.textContent).toBe('59')
  })

  it('shows the event-ended alert when the target passes', () => {
    render(<Countdown />)

    act(() => {
      vi.setSystemTime('2027-03-02T00:00:00Z')
      vi.advanceTimersByTime(1000)
    })

    const alert = screen.getByRole('alert')
    expect(alert).toHaveTextContent(countdown.endedMessage)
    expect(screen.queryByText('Days')).not.toBeInTheDocument()
  })
})
