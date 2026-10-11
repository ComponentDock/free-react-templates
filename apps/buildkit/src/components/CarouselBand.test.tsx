import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { CarouselBand } from './CarouselBand'

describe('CarouselBand', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('advances the cross-fade on the autoplay timer', () => {
    const { container } = render(<CarouselBand />)

    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(3)
    expect(slides[0]!.className).toContain('opacity-100')
    expect(slides[0]!.getAttribute('aria-hidden')).toBeNull()
    expect(slides[1]!.getAttribute('aria-hidden')).toBe('true')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(slides[1]!.className).toContain('opacity-100')
    expect(slides[0]!.className).toContain('opacity-0')

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(slides[0]!.className).toContain('opacity-100')
  })

  it('jumps between slides with the dots and arrows', () => {
    const { container } = render(<CarouselBand />)

    const slides = container.querySelectorAll('[data-slide]')
    expect(container.querySelector('section')!.className).toContain('bg-primary-600')

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(slides[2]!.className).toContain('opacity-100')
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(slides[1]!.className).toContain('opacity-100')

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slides[2]!.className).toContain('opacity-100')

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(slides[0]!.className).toContain('opacity-100')
  })

  it('renders the kit slide copy with white calls to action', () => {
    render(<CarouselBand />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Bootstrap Carousel' }),
    ).toBeInTheDocument()
    expect(screen.getByText('A free UI kit, ready to ship.')).toBeInTheDocument()
    const ctas = screen.getAllByRole('link', { name: 'See all components', hidden: true })
    expect(ctas).toHaveLength(3)
    expect(ctas[0]!.className).toContain('bg-white')
  })
})
