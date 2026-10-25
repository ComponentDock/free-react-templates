import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { AUTOPLAY_MS, Testimonials, perView } from '../components/Testimonials'
import { TESTIMONIALS } from '../content'
import { nativeWidth, restoreMedia, resizeTo, stubMedia } from './helpers'

afterEach(() => {
  vi.useRealTimers()
  resizeTo(nativeWidth)
  restoreMedia()
})

function track(container: HTMLElement) {
  return container.querySelector('ul') as HTMLElement
}

describe('perView', () => {
  it('maps the three breakpoints to three, two and one', () => {
    expect(perView(1440)).toBe(3)
    expect(perView(1024)).toBe(3)
    expect(perView(900)).toBe(2)
    expect(perView(640)).toBe(2)
    expect(perView(390)).toBe(1)
  })
})

describe('Testimonials', () => {
  it('shows three cards and no controls when they all fit', () => {
    resizeTo(1440)
    const { container } = render(<Testimonials />)

    expect(container.querySelector('#testimonials')).toHaveClass('bg-gray-50')
    expect(screen.getAllByTestId('testimonial-card')).toHaveLength(3)
    expect(screen.getByText(TESTIMONIALS.pill)).toHaveClass('bg-primary-100', 'text-primary-700')
    expect(screen.queryByRole('button', { name: 'Previous reference' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Go to reference 1' })).toBeNull()
  })

  it('prints five stars, a curly-quoted blockquote and the author disc per card', () => {
    resizeTo(1440)
    render(<Testimonials />)

    TESTIMONIALS.cards.forEach((card) => {
      const quote = screen.getByText(`“${card.quote}”`)
      expect(quote.tagName).toBe('BLOCKQUOTE')
      expect(quote).toHaveClass('text-lg', 'font-medium')
      expect(screen.getByText(card.name)).toHaveClass('font-semibold')
      expect(screen.getByText(card.role)).toHaveClass('text-gray-600')
      expect(screen.getByText(card.initial)).toHaveClass('bg-primary-100', 'text-primary-600')
    })
  })

  it('autoplays one card at a time on mobile with dots and arrows', () => {
    vi.useFakeTimers()
    resizeTo(390)
    const { container } = render(<Testimonials />)

    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
    expect(screen.getAllByRole('button', { name: /Go to reference/ })).toHaveLength(3)
    expect(screen.getByRole('button', { name: 'Next reference' })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(AUTOPLAY_MS)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-100%)' })
    expect(screen.getByRole('button', { name: 'Go to reference 2' })).toHaveClass('w-8')

    act(() => {
      vi.advanceTimersByTime(AUTOPLAY_MS)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-200%)' })
  })

  it('wraps with the arrows and jumps with the dots', () => {
    vi.useFakeTimers()
    resizeTo(390)
    const { container } = render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous reference' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-200%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Next reference' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Go to reference 3' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-200%)' })
    expect(screen.getByRole('button', { name: 'Go to reference 3' })).toHaveClass('w-8')
  })

  it('pauses the timer while the pointer is inside', () => {
    vi.useFakeTimers()
    resizeTo(390)
    const { container } = render(<Testimonials />)
    const carousel = container.querySelector('[aria-roledescription="carousel"]') as HTMLElement

    fireEvent.mouseOver(carousel)
    act(() => {
      vi.advanceTimersByTime(AUTOPLAY_MS * 2)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })

    fireEvent.mouseOut(carousel)
    act(() => {
      vi.advanceTimersByTime(AUTOPLAY_MS)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-100%)' })
  })

  it('does not autoplay when motion is reduced', () => {
    vi.useFakeTimers()
    stubMedia(true)
    resizeTo(390)
    const { container } = render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(AUTOPLAY_MS * 2)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('re-renders per view when the window is resized', () => {
    resizeTo(390)
    const { container } = render(<Testimonials />)

    expect(screen.getAllByTestId('testimonial-card')).toHaveLength(3)
    resizeTo(900)
    expect(screen.getAllByRole('button', { name: /Go to reference/ })).toHaveLength(2)
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
  })
})
