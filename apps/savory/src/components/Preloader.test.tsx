import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import { Preloader } from './Preloader'

afterEach(() => {
  cleanup()
  vi.useRealTimers()
})

describe('Preloader', () => {
  it('shows a full-screen sage overlay with cooking text and animation while loading', () => {
    vi.useFakeTimers()
    render(<Preloader />)

    const overlay = screen.getByText('Cooking in progress..')
    expect(overlay).toBeInTheDocument()
    expect(overlay.parentElement).toHaveClass('bg-brand')
    expect(screen.getByLabelText('Pot animation')).toBeInTheDocument()
  })

  it('removes the overlay once the page has loaded', () => {
    vi.useFakeTimers()
    render(<Preloader />)

    act(() => {
      vi.advanceTimersByTime(1600)
    })

    expect(screen.queryByText('Cooking in progress..')).not.toBeInTheDocument()
  })

  it('cleans up its timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Preloader />)

    unmount()

    act(() => {
      vi.advanceTimersByTime(1600)
    })
    expect(screen.queryByText('Cooking in progress..')).not.toBeInTheDocument()
  })
})
