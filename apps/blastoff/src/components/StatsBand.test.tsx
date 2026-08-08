import { act, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { StatsBand } from './StatsBand'

describe('StatsBand', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the four counter labels', () => {
    render(<StatsBand />)

    expect(screen.getByRole('region', { name: 'Key statistics' })).toBeInTheDocument()
    for (const label of ['Active Users', 'Uptime', 'Funding Raised', 'User Rating']) {
      expect(screen.getByText(label)).toBeInTheDocument()
    }
  })

  it('animates the counters from zero to their targets', () => {
    vi.useFakeTimers()
    render(<StatsBand />)

    // Initial render — counters start at zero
    expect(screen.getByText('0+')).toBeInTheDocument()
    expect(screen.getByText('0.0%')).toBeInTheDocument()
    expect(screen.getByText('$0.0M')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(2000)
    })

    expect(screen.getByText('2,000+')).toBeInTheDocument()
    expect(screen.getByText('99.9%')).toBeInTheDocument()
    expect(screen.getByText('$2.5M')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
  })

  it('clears the intervals on unmount', () => {
    vi.useFakeTimers()
    const clearSpy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<StatsBand />)

    act(() => {
      unmount()
    })

    expect(clearSpy).toHaveBeenCalled()
  })
})
