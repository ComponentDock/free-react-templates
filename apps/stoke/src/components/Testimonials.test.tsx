import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { REVIEWS } from '../content'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

function track(container: HTMLElement) {
  return container.querySelector('[data-carousel] > div') as HTMLElement
}

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
  setWidth(1024)
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
})

describe('Testimonials', () => {
  it('renders the three reviews with initials and towns', () => {
    render(<Testimonials />)
    for (const review of REVIEWS) {
      expect(screen.getByText(`“${review.quote}”`)).toBeInTheDocument()
      expect(screen.getByText(review.name)).toBeInTheDocument()
      expect(screen.getByText(review.town)).toBeInTheDocument()
    }
    expect(screen.getByText('Reviews')).toHaveClass('bg-primary-100')
  })

  it('shows all three cards and no controls when they fit in one page', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelectorAll('[data-carousel-slide]')).toHaveLength(3)
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
    expect(screen.queryByRole('button', { name: 'Next reviews' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Go to review page 1' })).toBeNull()
  })

  it('pages two at a time on a tablet, with dots and arrows', () => {
    setWidth(760)
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Previous reviews' })).toHaveClass('hidden', 'lg:flex')
    expect(screen.getAllByRole('button', { name: /Go to review page/ })).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Next reviews' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-100%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Go to review page 1' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Previous reviews' }))
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('advances itself every five seconds when there is more than one page', () => {
    vi.useFakeTimers()
    setWidth(760)
    const { container } = render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-100%)' })

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
  })

  it('does not advance under reduced motion', () => {
    vi.useFakeTimers()
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    setWidth(760)
    const { container } = render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(15_000)
    })
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
  })
})
