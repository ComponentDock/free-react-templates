import { render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useRotator } from './useRotator'

function Probe({ items, intervalMs }: { items: readonly string[]; intervalMs: number }) {
  const index = useRotator(items, intervalMs)
  return <p data-testid="current">{items[index]}</p>
}

describe('useRotator', () => {
  afterEach(() => {
    vi.useRealTimers()
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  it('advances to the next item on the interval', () => {
    vi.useFakeTimers()
    render(<Probe items={['first', 'second', 'third']} intervalMs={1000} />)
    expect(screen.getByTestId('current')).toHaveTextContent('first')
    act(() => {
      vi.advanceTimersByTime(1000)
    })
    expect(screen.getByTestId('current')).toHaveTextContent('second')
    act(() => {
      vi.advanceTimersByTime(2000)
    })
    expect(screen.getByTestId('current')).toHaveTextContent('first')
  })

  it('does not start a timer for a single-item list', () => {
    vi.useFakeTimers()
    const spy = vi.spyOn(window, 'setInterval')
    render(<Probe items={['only']} intervalMs={500} />)
    expect(spy).not.toHaveBeenCalled()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByTestId('current')).toHaveTextContent('only')
  })

  it('clears the interval on unmount', () => {
    vi.useFakeTimers()
    const spy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<Probe items={['a', 'b']} intervalMs={1000} />)
    unmount()
    expect(spy).toHaveBeenCalled()
  })
})
