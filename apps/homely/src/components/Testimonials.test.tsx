import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TESTIMONIALS } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  const visibleQuote = (quote: string) => {
    const figure = screen.getByText(quote).closest('figure') as HTMLElement
    expect(figure.getAttribute('aria-hidden')).not.toBe('true')
    return figure
  }

  it('shows the first quote with its customer, and hides the others', () => {
    render(<Testimonials />)

    visibleQuote(TESTIMONIALS[0].quote)
    expect(screen.getByText(TESTIMONIALS[0].name)).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS[0].role)).toBeInTheDocument()

    const hidden = screen.getByText(TESTIMONIALS[1].quote).closest('figure') as HTMLElement
    expect(hidden.getAttribute('aria-hidden')).toBe('true')

    const dots = screen.getAllByRole('button', { name: /Show testimonial/ })
    expect(dots).toHaveLength(TESTIMONIALS.length)
    expect(dots[0]).toHaveAttribute('aria-current', 'true')
  })

  it('moves to the picked slide when a dot is clicked', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))

    visibleQuote(TESTIMONIALS[1].quote)
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    const first = screen.getByText(TESTIMONIALS[0].quote).closest('figure') as HTMLElement
    expect(first.getAttribute('aria-hidden')).toBe('true')
  })

  it('advances automatically and wraps around', () => {
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    visibleQuote(TESTIMONIALS[1].quote)

    act(() => {
      vi.advanceTimersByTime(6000 * (TESTIMONIALS.length - 1))
    })
    visibleQuote(TESTIMONIALS[0].quote)
  })
})
