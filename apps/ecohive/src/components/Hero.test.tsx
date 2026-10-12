import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

afterEach(() => {
  vi.useRealTimers()
})

describe('Hero', () => {
  it('renders the first slide with its eyebrow, heading, paragraph and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Best domain & hosting service provider')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Powerful web hosting')
    expect(screen.getByText(/Supercharge your site with detailed analytics/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started' })).toHaveAttribute('href', '#pricing')
  })

  it('renders one indicator per slide with the first one marked current', () => {
    render(<Hero />)
    const indicators = screen.getAllByRole('button', { name: /^Show slide/ })
    expect(indicators).toHaveLength(2)
    expect(indicators[0]).toHaveAttribute('aria-current', 'true')
    expect(indicators[1]!).not.toHaveAttribute('aria-current')
  })

  it('switches slides when an indicator is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const indicators = screen.getAllByRole('button', { name: /^Show slide/ })

    await user.click(indicators[1]!)
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Fast, green web hosting for every site',
    )
    expect(indicators[1]!).toHaveAttribute('aria-current', 'true')
    expect(screen.queryByText('Powerful web hosting')).not.toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Compare Plans' })).toBeInTheDocument()
  })

  it('rotates to the next slide on the interval and wraps back around', () => {
    vi.useFakeTimers()
    render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe(
      'Fast, green web hosting for every site',
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Powerful web hosting')
  })

  it('clears the rotation timer when it unmounts', () => {
    vi.useFakeTimers()
    const clearInterval = vi.spyOn(globalThis, 'clearInterval')
    const { unmount } = render(<Hero />)

    unmount()
    expect(clearInterval).toHaveBeenCalled()
    clearInterval.mockRestore()
  })
})
