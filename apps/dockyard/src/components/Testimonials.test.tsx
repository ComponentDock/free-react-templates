import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'
import { mockReducedMotion } from '../test/match-media'

afterEach(() => {
  vi.useRealTimers()
})

describe('Testimonials', () => {
  it('shows a three-up rail of quotes with four dots', () => {
    render(<Testimonials />)

    const cards = screen.getAllByRole('listitem').slice(0, 3)
    expect(cards).toHaveLength(3)
    expect(screen.getByRole('group', { name: 'Client testimonials' })).toBeInTheDocument()

    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials[2]!.name)).toBeInTheDocument()
    expect(screen.getAllByRole('button')).toHaveLength(4)

    const quote = screen.getByText(`“${testimonials[0]!.quote}”`)
    expect(quote.tagName).toBe('BLOCKQUOTE')
    expect(quote).toHaveClass('font-quote', 'italic', 'text-[18px]')
  })

  it('advances the window with the dots and marks the active one', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('button')[0]).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 4' }))

    expect(screen.getByRole('button', { name: 'Show testimonial 4' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).not.toHaveAttribute(
      'aria-current',
    )
    expect(screen.getByText(testimonials[3]!.name)).toBeInTheDocument()
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
  })

  it('moves with the arrow keys in both directions and wraps around', () => {
    render(<Testimonials />)
    const rail = screen.getByRole('group', { name: 'Client testimonials' })

    fireEvent.keyDown(rail, { key: 'ArrowLeft' })
    expect(screen.getByText(testimonials[3]!.name)).toBeInTheDocument()

    fireEvent.keyDown(rail, { key: 'ArrowRight' })
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()

    fireEvent.keyDown(rail, { key: 'Enter' })
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
  })

  it('autoplays every five seconds and pauses while the pointer is over the rail', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const rail = screen.getByRole('group', { name: 'Client testimonials' })

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()

    fireEvent.mouseEnter(rail)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()

    fireEvent.mouseLeave(rail)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(testimonials[2]!.name)).toBeInTheDocument()
  })

  it('pauses on keyboard focus and resumes when focus leaves', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    const rail = screen.getByRole('group', { name: 'Client testimonials' })

    fireEvent.focus(rail)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()

    fireEvent.blur(rail)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText(testimonials[1]!.name)).toBeInTheDocument()
  })

  it('does not autoplay under reduced motion', () => {
    mockReducedMotion()
    vi.useFakeTimers()
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })

    expect(screen.getByText(testimonials[0]!.name)).toBeInTheDocument()
  })

  it('hides the extra cards at the narrow breakpoints', () => {
    render(<Testimonials />)

    const cards = screen.getAllByRole('listitem').slice(0, 3)
    expect(cards[1]).toHaveClass('max-sm:hidden')
    expect(cards[2]).toHaveClass('max-md:hidden')
    expect(cards[0]?.className).not.toContain('hidden')
  })
})
