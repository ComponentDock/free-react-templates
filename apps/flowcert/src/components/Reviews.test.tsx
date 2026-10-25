import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Reviews, perViewFor } from './Reviews'
import { reviews } from '../data'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { value: width, configurable: true, writable: true })
}

function track() {
  return screen.getByTestId('review-track')
}

beforeEach(() => {
  setWidth(1024)
})

afterEach(() => {
  vi.useRealTimers()
  setWidth(1024)
  Reflect.deleteProperty(window, 'matchMedia')
  vi.restoreAllMocks()
})

describe('Reviews', () => {
  it('renders three reviews with a labelled five-star rating each', () => {
    render(<Reviews />)

    expect(screen.getAllByRole('img', { name: 'Rated 5 out of 5' })).toHaveLength(3)

    for (const review of reviews) {
      expect(screen.getByText(`“${review.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(review.name)).toBeInTheDocument()
      expect(screen.getByText(review.town)).toBeInTheDocument()
    }
  })

  it('keeps the reviewer initial decorative and the badge as a pill', () => {
    render(<Reviews />)

    expect(screen.getByText('R')).toHaveAttribute('aria-hidden', 'true')
    expect(screen.getByText('Reviews')).toHaveClass('rounded-full', 'bg-primary-100')
    expect(
      screen.getByRole('heading', { name: 'What people say afterwards' }),
    ).toBeInTheDocument()
  })

  it('shows three cards at lg, where the track has a single position', () => {
    const { container } = render(<Reviews />)

    expect(track()).toHaveAttribute('data-per-view', '3')
    expect(screen.getAllByLabelText(/^Go to review slide /)).toHaveLength(1)
    expect(track()).toHaveAttribute('style', 'transform: translateX(-0%);')

    const arrows = container.querySelectorAll('.lg\\:flex')
    expect(arrows).toHaveLength(2)
  })

  it('does not move the track at lg because three cards fill the viewport', async () => {
    const user = userEvent.setup()
    render(<Reviews />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))

    expect(track()).toHaveAttribute('data-index', '0')
  })

  it('advances one card at a time below lg, clamped at both ends', async () => {
    setWidth(375)
    const user = userEvent.setup()
    render(<Reviews />)

    expect(track()).toHaveAttribute('data-per-view', '1')
    expect(screen.getAllByLabelText(/^Go to review slide /)).toHaveLength(3)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track()).toHaveAttribute('data-index', '1')

    const dots = screen.getAllByLabelText(/^Go to review slide /)
    await user.click(dots[2]!)
    expect(track()).toHaveAttribute('data-index', '2')
    expect(dots[2]).toHaveAttribute('aria-current', 'true')
    expect(dots[0]).toHaveAttribute('aria-current', 'false')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track()).toHaveAttribute('data-index', '1')

    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    await user.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(track()).toHaveAttribute('data-index', '0')
  })

  it('recomputes the cards per view and clamps the index on resize', async () => {
    setWidth(375)
    const user = userEvent.setup()
    render(<Reviews />)

    await user.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(track()).toHaveAttribute('data-index', '1')

    setWidth(1280)
    act(() => {
      window.dispatchEvent(new Event('resize'))
    })

    expect(track()).toHaveAttribute('data-per-view', '3')
    expect(track()).toHaveAttribute('data-index', '0')
    expect(screen.getAllByLabelText(/^Go to review slide /)).toHaveLength(1)
  })

  it('advances on a five second timer and wraps at the last position', () => {
    vi.useFakeTimers()
    setWidth(375)
    render(<Reviews />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '1')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '2')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '0')
  })

  it('pauses the timer while the pointer is over the carousel', () => {
    vi.useFakeTimers()
    setWidth(375)
    render(<Reviews />)

    const carousel = screen.getByTestId('review-carousel')
    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track()).toHaveAttribute('data-index', '0')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '1')
  })

  it('does not autoplay when the visitor prefers reduced motion', () => {
    vi.useFakeTimers()
    setWidth(375)
    Object.defineProperty(window, 'matchMedia', {
      value: () => ({ matches: true }),
      configurable: true,
      writable: true,
    })
    render(<Reviews />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })
    expect(track()).toHaveAttribute('data-index', '0')
  })

  it('autoplays when matchMedia is unavailable', () => {
    vi.useFakeTimers()
    setWidth(375)
    Object.defineProperty(window, 'matchMedia', { value: undefined, configurable: true })
    render(<Reviews />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '1')
  })
})

describe('perViewFor', () => {
  it('gives three cards at lg, two at sm and one below it', () => {
    expect(perViewFor(1280)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(700)).toBe(2)
    expect(perViewFor(640)).toBe(2)
    expect(perViewFor(375)).toBe(1)
  })
})
