import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from '../components/Testimonials'
import { SAMPLE_REVIEWS, TESTIMONIALS } from '../data'
import { resetMedia, stubMedia } from './helpers'

const DESKTOP = { '(min-width: 1024px)': true }
const TABLET = { '(min-width: 640px)': true }
const REDUCED = { '(prefers-reduced-motion: reduce)': true }

afterEach(() => {
  vi.useRealTimers()
  resetMedia()
})

function dots() {
  return screen.getAllByRole('button', { name: /Go to slide/ })
}

describe('Testimonials', () => {
  it('renders the three reviews with sample data disclosed', () => {
    render(<Testimonials />)

    expect(screen.getByText(SAMPLE_REVIEWS)).toBeInTheDocument()
    TESTIMONIALS.forEach((testimonial) => {
      expect(screen.getByText(`“${testimonial.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(screen.getByText(testimonial.town)).toBeInTheDocument()
    })
    expect(screen.getAllByLabelText('Five out of five stars')).toHaveLength(
      TESTIMONIALS.length,
    )
  })

  it('shows one slide and three dots on a phone, with both arrows hidden until lg', () => {
    render(<Testimonials />)

    expect(dots()).toHaveLength(TESTIMONIALS.length)
    expect(dots()[0]).toHaveAttribute('aria-current', 'true')
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    expect(next).toHaveClass('hidden', 'lg:flex')
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toHaveClass('hidden')
  })

  it('advances every five seconds and wraps', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots()[1]).toHaveAttribute('aria-current', 'true')

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(dots()[0]).toHaveAttribute('aria-current', 'true')
  })

  it('pauses while the pointer is over the track', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const carousel = screen.getByTestId('carousel')

    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots()[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(dots()[1]).toHaveAttribute('aria-current', 'true')
  })

  it('never auto-advances under a reduced-motion preference', () => {
    vi.useFakeTimers()
    stubMedia(REDUCED)
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(15000)
    })

    expect(dots()[0]).toHaveAttribute('aria-current', 'true')
  })

  it('runs the arrows and the dots', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(dots()[1]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(dots()[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(dots()[2]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(dots()[1]).toHaveAttribute('aria-current', 'true')
    expect(screen.getByTestId('carousel-track')).toHaveStyle({ transform: 'translateX(-100%)' })
  })

  it('shows three cards and a single page at desktop width', () => {
    stubMedia(DESKTOP)
    render(<Testimonials />)

    expect(dots()).toHaveLength(1)
    expect(screen.getAllByRole('listitem')).toHaveLength(TESTIMONIALS.length)
  })

  it('shows two cards at tablet width and re-lays out on resize', () => {
    stubMedia(TABLET)
    render(<Testimonials />)
    expect(dots()).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(dots()[1]).toHaveAttribute('aria-current', 'true')

    stubMedia(DESKTOP)
    fireEvent(window, new Event('resize'))

    expect(dots()).toHaveLength(1)
    expect(dots()[0]).toHaveAttribute('aria-current', 'true')
  })
})
