import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen, within } from '@testing-library/react'
import { Countdown } from './Countdown'
import { festivalSubtitle, ticketsUrl } from '../data'

describe('Countdown', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the festival title pair and the live timer units', () => {
    vi.useFakeTimers()
    // Mocked clock so the pinned festival date leaves exactly
    // 20 days 45 hours 18 minutes 09 seconds.
    vi.setSystemTime(new Date('2026-12-24T14:41:51Z'))

    render(<Countdown />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(/Tomorrowland 2020/)
    expect(screen.getByText(festivalSubtitle)).toBeInTheDocument()

    const timer = screen.getByRole('timer')
    expect(within(timer).getByText('20')).toBeInTheDocument()
    expect(within(timer).getByText('45')).toBeInTheDocument()
    expect(within(timer).getByText('18')).toBeInTheDocument()
    expect(within(timer).getByText('09')).toBeInTheDocument()
    for (const label of ['Days', 'Hours', 'Minutes', 'Seconds']) {
      expect(within(timer).getByText(label)).toBeInTheDocument()
    }
  })

  it('ticks down every second (fake timers)', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-12-24T14:41:51Z'))

    render(<Countdown />)

    const timer = screen.getByRole('timer')
    expect(within(timer).getByText('09')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(within(timer).getByText('08')).toBeInTheDocument()
    expect(within(timer).queryByText('09')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(60_000)
    })
    expect(within(timer).getByText('17')).toBeInTheDocument()
    expect(within(timer).getByText('08')).toBeInTheDocument()
  })

  it('shows plain hours when less than a full day remains', () => {
    vi.useFakeTimers()
    // 1 hour 10 minutes before the festival.
    vi.setSystemTime(new Date('2027-01-15T10:50:00Z'))

    render(<Countdown />)

    const timer = screen.getByRole('timer')
    expect(within(timer).getByText('0')).toBeInTheDocument()
    expect(within(timer).getByText('1')).toBeInTheDocument()
    expect(within(timer).getByText('10')).toBeInTheDocument()
    expect(within(timer).getByText('00')).toBeInTheDocument()
  })

  it('renders the Buy tickets button', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-12-24T14:41:51Z'))

    render(<Countdown />)

    const buy = screen.getByRole('link', { name: 'Buy tickets' })
    expect(buy).toHaveAttribute('href', ticketsUrl)
    expect(buy).toHaveAttribute('target', '_blank')
  })
})
