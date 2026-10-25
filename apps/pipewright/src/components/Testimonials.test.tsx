import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../content'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

function resizeTo(width: number) {
  setWidth(width)
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

const track = () => document.querySelector('[data-carousel-track]') as HTMLElement
const carousel = () => document.querySelector('[data-carousel]') as HTMLElement

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  setWidth(1024)
})

describe('Testimonials', () => {
  it('is a static three-up at desktop: no arrows, no dots, no translation', () => {
    setWidth(1440)
    const { container } = render(<Testimonials />)

    expect(container.querySelectorAll('[data-carousel-slide]')).toHaveLength(3)
    expect(container.querySelectorAll('[data-carousel-slide]')[0]).toHaveStyle({
      width: '33.333333333333336%',
    })
    expect(screen.queryByRole('button', { name: /testimonial/ })).toBeNull()
    expect(screen.queryByRole('button', { name: /review page/ })).toBeNull()
    expect(carousel()).toHaveAttribute('data-index', '0')
  })

  it('shows both arrows and two dots at 900 px', () => {
    setWidth(900)
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toHaveClass(
      'hidden',
      'lg:flex',
    )
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /review page/ })).toHaveLength(2)
    expect(screen.getByRole('button', { name: 'Go to review page 1' })).toHaveClass(
      'w-8',
      'bg-primary-600',
    )
    expect(screen.getByRole('button', { name: 'Go to review page 2' })).toHaveClass(
      'w-2.5',
      'bg-gray-300',
    )
  })

  it('pages one card at a time at 390 px and clamps at both ends', () => {
    setWidth(390)
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /review page/ })).toHaveLength(3)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(carousel()).toHaveAttribute('data-index', '1')
    expect(track()).toHaveStyle({ transform: 'translateX(-100%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(carousel()).toHaveAttribute('data-index', '0')

    fireEvent.click(screen.getByRole('button', { name: 'Go to review page 3' }))
    expect(carousel()).toHaveAttribute('data-index', '2')
    expect(screen.getByRole('button', { name: 'Go to review page 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(carousel()).toHaveAttribute('data-index', '2')
  })

  it('advances every five seconds, pauses on hover and wraps at the end', () => {
    vi.useFakeTimers()
    setWidth(390)
    const { container } = render(<Testimonials />)
    expect(carousel()).toHaveAttribute('data-index', '0')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(carousel()).toHaveAttribute('data-index', '1')

    fireEvent.mouseEnter(container.querySelector('[data-carousel]') as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(carousel()).toHaveAttribute('data-index', '1')

    fireEvent.mouseLeave(container.querySelector('[data-carousel]') as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(carousel()).toHaveAttribute('data-index', '2')

    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(carousel()).toHaveAttribute('data-index', '0')
  })

  it('does not autoplay under reduced motion', () => {
    vi.useFakeTimers()
    vi.stubGlobal(
      'matchMedia',
      vi.fn(() => ({ matches: true })),
    )
    setWidth(390)
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })
    expect(carousel()).toHaveAttribute('data-index', '0')
  })

  it('re-pages when the viewport narrows under the carousel', () => {
    setWidth(1440)
    render(<Testimonials />)
    expect(screen.queryByRole('button', { name: /review page/ })).toBeNull()

    resizeTo(900)
    expect(screen.getAllByRole('button', { name: /review page/ })).toHaveLength(2)
    expect(carousel()).toHaveAttribute('data-index', '0')
  })

  it('carries the badge, a sans heading and the six staggered reveals', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByText(TESTIMONIALS.badge)).toHaveClass(
      'rounded-full',
      'bg-primary-100',
      'text-primary-700',
    )
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveClass('font-bold', 'tracking-tight', 'text-gray-900')
    expect(heading).not.toHaveClass('font-serif')
    expect(screen.getByText(TESTIMONIALS.lede)).toHaveClass('text-lg', 'text-gray-600')

    const reveals = container.querySelectorAll('[data-animate]')
    expect(reveals).toHaveLength(6)
    expect(Array.from(reveals).map((node) => node.getAttribute('data-delay'))).toEqual([
      null,
      '100',
      '200',
      '100',
      '200',
      '300',
    ])
  })

  it('draws three white cards with bronze stars and originals', () => {
    const { container } = render(<Testimonials />)
    const cards = container.querySelectorAll('figure')
    expect(cards).toHaveLength(3)
    for (const [index, card] of Array.from(cards).entries()) {
      expect(card).toHaveClass('rounded-2xl', 'bg-white', 'p-8', 'shadow-soft')
      const review = TESTIMONIALS.items[index]!
      expect(card.textContent).toContain(review.quote)
      expect(card.textContent).toContain(review.name)
      expect(card.textContent).toContain(review.town)
    }
    const first = cards[0] as HTMLElement
    expect(first.querySelector('svg')).toHaveClass('text-primary-400')
    expect(first.querySelector('blockquote')).toHaveClass('text-lg', 'font-medium')
  })
})
