import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Countdown } from './Countdown'
import {
  countdownKicker,
  countdownTitle,
  countdownUnits,
  getCountdownParts,
  getCountdownTarget,
} from '../data'

const base = new Date('2026-08-15T12:00:00Z')

describe('Countdown', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(base)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the title, date kicker and four unit columns', () => {
    render(<Countdown target={new Date(base.getTime() + 100000)} />)
    expect(screen.getByRole('heading', { level: 2, name: countdownTitle })).toBeInTheDocument()
    expect(screen.getByText(countdownKicker)).toBeInTheDocument()
    for (const unit of countdownUnits) {
      expect(screen.getByText(unit.label)).toBeInTheDocument()
    }
  })

  it('ticks down every second', () => {
    const target = new Date(base.getTime() + 2 * 86400000 + 3 * 3600000 + 4 * 60000 + 51000)
    render(<Countdown target={target} />)
    expect(screen.getByText('02')).toBeInTheDocument()
    expect(screen.getByText('03')).toBeInTheDocument()
    expect(screen.getByText('04')).toBeInTheDocument()
    expect(screen.getByText('51')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByText('50')).toBeInTheDocument()
  })

  it('shows zeros when the target is in the past', () => {
    const past = new Date(base.getTime() - 5000)
    render(<Countdown target={past} />)
    expect(screen.getAllByText('00')).toHaveLength(4)
    const parts = getCountdownParts(past, base)
    expect(parts).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  })

  it('defaults to a future target and cleans up its interval on unmount', () => {
    const { unmount } = render(<Countdown />)
    expect(screen.getByText('DAYS')).toBeInTheDocument()
    expect(getCountdownParts(getCountdownTarget(), base).days).toBeGreaterThan(80)
    expect(() => unmount()).not.toThrow()
  })
})
