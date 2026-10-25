import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { SLIDE_INTERVAL_MS, Testimonials } from './Testimonials'
import { testimonials } from '../data'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  vi.useRealTimers()
})

function shownQuote(): string {
  const region = screen.getByRole('group', { name: 'Client testimonials' })
  return region.querySelector('p')?.textContent ?? ''
}

describe('Testimonials', () => {
  it('shows one quote, its author and a rail of four thumbnails', () => {
    render(<Testimonials />)

    expect(shownQuote()).toBe(testimonials[0]!.quote)
    expect(screen.getByRole('heading', { level: 3 }).textContent).toBe(testimonials[0]!.name)
    expect(screen.getByText(testimonials[0]!.role)).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /^Show testimonial from/ })).toHaveLength(
      testimonials.length,
    )
    expect(screen.getByRole('button', { name: `Show testimonial from ${testimonials[0]!.name}` })).toHaveAttribute(
      'aria-pressed',
      'true',
    )
  })

  it('carries the 20%-opacity quotation mark above the quote', () => {
    const { container } = render(<Testimonials />)
    const mark = container.querySelector('svg') as SVGElement

    expect(mark.getAttribute('class')).toContain('text-gold-soft/20')
    expect(mark.getAttribute('class')).toContain('w-[115px]')
  })

  it('advances itself on the interval and wraps after the last quote', () => {
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS)
    })
    expect(shownQuote()).toBe(testimonials[1]!.quote)

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * (testimonials.length - 1))
    })
    expect(shownQuote()).toBe(testimonials[0]!.quote)
  })

  it('holds the quote while the pointer is on the band and moves again on leave', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const band = screen.getByRole('region', { name: 'Client testimonials' })

    fireEvent.mouseEnter(band)
    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 2)
    })
    expect(shownQuote()).toBe(testimonials[0]!.quote)

    fireEvent.mouseLeave(band)
    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS)
    })
    expect(shownQuote()).toBe(testimonials[1]!.quote)
  })

  it('holds the quote while it holds focus and releases it on blur', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const band = screen.getByRole('region', { name: 'Client testimonials' })

    fireEvent.focus(band)
    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 2)
    })
    expect(shownQuote()).toBe(testimonials[0]!.quote)

    fireEvent.blur(band)
    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS)
    })
    expect(shownQuote()).toBe(testimonials[1]!.quote)
  })

  it('steps with the arrows and jumps with the thumbnails, wrapping at both ends', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(shownQuote()).toBe(testimonials[1]!.quote)

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(shownQuote()).toBe(testimonials[testimonials.length - 1]!.quote)

    fireEvent.click(
      screen.getByRole('button', { name: `Show testimonial from ${testimonials[2]!.name}` }),
    )
    expect(shownQuote()).toBe(testimonials[2]!.quote)
    expect(
      screen.getByRole('button', { name: `Show testimonial from ${testimonials[2]!.name}` }),
    ).toHaveAttribute('aria-pressed', 'true')
  })

  it('never moves on its own for a visitor who asks for reduced motion, yet still steps on demand', () => {
    vi.useFakeTimers()
    mockReducedMotion()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(SLIDE_INTERVAL_MS * 3)
    })
    expect(shownQuote()).toBe(testimonials[0]!.quote)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(shownQuote()).toBe(testimonials[1]!.quote)
  })
})
