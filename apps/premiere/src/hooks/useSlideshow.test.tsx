import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import { useSlideshow } from './useSlideshow'

function Probe({ count, interval }: { count: number; interval?: number }) {
  const active = useSlideshow(count, interval)
  return <p data-testid="active">{active}</p>
}

const realMatchMedia = window.matchMedia

describe('useSlideshow', () => {
  afterEach(() => {
    window.matchMedia = realMatchMedia
    vi.useRealTimers()
  })

  it('advances through the photos once every 7 seconds and wraps around', () => {
    vi.useFakeTimers()
    render(<Probe count={3} />)

    expect(screen.getByTestId('active')).toHaveTextContent('0')

    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('1')

    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('2')

    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('0')
  })

  it('honours a custom interval', () => {
    vi.useFakeTimers()
    render(<Probe count={2} interval={1000} />)

    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('1')
  })

  it('stays on the first photo when there is nothing to cycle', () => {
    vi.useFakeTimers()
    render(<Probe count={1} />)

    act(() => {
      vi.advanceTimersByTime(21_000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('0')
  })

  it('does not start under prefers-reduced-motion: reduce', () => {
    vi.useFakeTimers()
    window.matchMedia = (() => ({ matches: true })) as unknown as typeof window.matchMedia

    render(<Probe count={3} />)

    act(() => {
      vi.advanceTimersByTime(21_000)
    })
    expect(screen.getByTestId('active')).toHaveTextContent('0')
  })

  it('clears its timer when it unmounts', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Probe count={3} />)

    expect(vi.getTimerCount()).toBe(1)

    unmount()

    expect(vi.getTimerCount()).toBe(0)
  })
})
