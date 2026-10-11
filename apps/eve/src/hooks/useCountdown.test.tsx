import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useCountdown } from './useCountdown'

function Probe({ target }: { target: number }) {
  const { days, hours, minutes, seconds } = useCountdown(target)
  return <p data-testid="out">{`${days}d ${hours}h ${minutes}m ${seconds}s`}</p>
}

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

  it('clears its interval when it unmounts', () => {
    vi.useFakeTimers()
    const clear = vi.spyOn(globalThis, 'clearInterval')
    const target = Date.now() + 86_400_000
    const { unmount } = render(<Probe target={target} />)

    unmount()

    expect(clear).toHaveBeenCalled()
    clear.mockRestore()
  })
})
