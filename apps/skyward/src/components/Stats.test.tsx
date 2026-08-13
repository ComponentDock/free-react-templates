import { act, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Stats } from './Stats'

describe('Stats', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading and all four counter labels', () => {
    render(<Stats />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'More than 12,000 websites trusted hosted' }),
    ).toBeInTheDocument()

    for (const label of [
      'CMS Installation',
      'Awards Won',
      'Registered Domains',
      'Satisfied Customers',
    ]) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('animates the counters from zero up to their targets', () => {
    render(<Stats />)

    expect(screen.getAllByText('0')).toHaveLength(4)
    expect(screen.queryByText('12,000')).not.toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('12,000')).toBeInTheDocument()
    expect(screen.getByText('100')).toBeInTheDocument()
    expect(screen.getByText('10,000')).toBeInTheDocument()
    expect(screen.getByText('9,000')).toBeInTheDocument()
  })

  it('stops the count-up timers on unmount', () => {
    const { unmount } = render(<Stats />)

    expect(() => {
      unmount()
      act(() => {
        vi.advanceTimersByTime(2000)
      })
    }).not.toThrow()
  })
})
