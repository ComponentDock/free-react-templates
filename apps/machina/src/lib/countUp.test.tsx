import { act, render } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { useCountUp } from './countUp'

function Probe({ target, duration = 1400 }: { target: number; duration?: number }) {
  const value = useCountUp(target, duration)
  return <span data-testid="value">{value}</span>
}

afterEach(() => {
  vi.useRealTimers()
})

describe('useCountUp', () => {
  it('starts at zero and counts up to the target', () => {
    vi.useFakeTimers()
    const { getByTestId } = render(<Probe target={127} />)

    expect(getByTestId('value')).toHaveTextContent('0')

    act(() => {
      vi.advanceTimersByTime(24)
    })
    expect(getByTestId('value')).toHaveTextContent('2')

    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(getByTestId('value')).toHaveTextContent('127')
  })

  it('supports a custom duration', () => {
    vi.useFakeTimers()
    const { getByTestId } = render(<Probe target={100} duration={100} />)

    act(() => {
      vi.advanceTimersByTime(200)
    })
    expect(getByTestId('value')).toHaveTextContent('100')
  })

  it('clears its interval when unmounted', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Probe target={127} />)

    unmount()
    act(() => {
      vi.advanceTimersByTime(4000)
    })
    expect(vi.getTimerCount()).toBe(0)
  })
})
