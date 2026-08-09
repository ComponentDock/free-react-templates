import { render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Stats } from './Stats'

afterEach(() => {
  vi.useRealTimers()
})

describe('Stats', () => {
  it('renders the four statistics and counts them up to their final values', async () => {
    vi.useFakeTimers()
    render(<Stats />)

    expect(screen.getByText('Guests Hosted')).toBeInTheDocument()
    expect(screen.getByText('Luxury Rooms')).toBeInTheDocument()
    expect(screen.getByText('Guest Rating')).toBeInTheDocument()
    expect(screen.getByText('Years of Service')).toBeInTheDocument()

    await vi.advanceTimersByTimeAsync(2500)

    expect(screen.getByText('10,000+')).toBeInTheDocument()
    expect(screen.getByText('150+')).toBeInTheDocument()
    expect(screen.getByText('4.9')).toBeInTheDocument()
    expect(screen.getByText('25+')).toBeInTheDocument()
  })

  it('cleans up the interval on unmount', () => {
    vi.useFakeTimers()
    const clearSpy = vi.spyOn(window, 'clearInterval')
    const { unmount } = render(<Stats />)

    unmount()
    expect(clearSpy).toHaveBeenCalled()
  })
})
