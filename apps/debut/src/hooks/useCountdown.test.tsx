import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useCountdown, splitRemaining } from './useCountdown'

function Probe({ target }: { target: number }) {
  const { days, hours, minutes, seconds } = useCountdown(target)
  return <p data-testid="out">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
}

describe('splitRemaining', () => {
  it('splits a remainder into day, hour, minute and second parts', () => {
    expect(splitRemaining(0)).toEqual({ days: 0, hours: 0, minutes: 0, seconds: 0 })
    expect(splitRemaining(90_061_000)).toEqual({
      days: 1,
      hours: 1,
      minutes: 1,
      seconds: 1,
    })
  })
})

describe('useCountdown', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('paints the remainder immediately and ticks every second', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-01T00:00:00.000Z'))

    const target = Date.now() + 35 * 86_400_000 + 18 * 3_600_000
    render(<Probe target={target} />)

    expect(screen.getByTestId('out')).toHaveTextContent('35d 18h 0m 0s')

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('out')).toHaveTextContent('35d 17h 59m 59s')

    act(() => {
      vi.advanceTimersByTime(60_000)
    })
    expect(screen.getByTestId('out')).toHaveTextContent('35d 17h 58m 59s')
  })

  it('never reads below zero once the target has passed', () => {
    vi.useFakeTimers()
    vi.setSystemTime(new Date('2026-06-01T00:00:00.000Z'))

    render(<Probe target={Date.now() - 10_000} />)

    expect(screen.getByTestId('out')).toHaveTextContent('0d 0h 0m 0s')

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('out')).toHaveTextContent('0d 0h 0m 0s')
  })
})
