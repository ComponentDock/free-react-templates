import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials, perViewFor } from '../components/Testimonials'
import { testimonials } from '../content'
import { resetMedia, stubMedia } from './helpers'

const nativeWidth = window.innerWidth

function resizeTo(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
  window.dispatchEvent(new Event('resize'))
}

afterEach(() => {
  vi.useRealTimers()
  resizeTo(nativeWidth)
  resetMedia()
})

describe('Testimonials', () => {
  it('maps the three breakpoints to 3, 2 and 1 cards per view', () => {
    expect(perViewFor(1440)).toBe(3)
    expect(perViewFor(1024)).toBe(3)
    expect(perViewFor(900)).toBe(2)
    expect(perViewFor(640)).toBe(2)
    expect(perViewFor(390)).toBe(1)
  })

  it('renders three reviews on the grey band with no controls when they all fit', () => {
    resizeTo(1440)
    const { container } = render(<Testimonials />)

    expect(container.querySelector('#testimonials')).toHaveClass('bg-gray-50')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(testimonials.title)

    const slides = container.querySelectorAll('[data-carousel] li')
    expect(slides).toHaveLength(3)
    expect(slides[0]).toHaveStyle({ flexBasis: `${100 / 3}%` })

    testimonials.items.forEach((review) => {
      expect(screen.getByText(`“${review.quote}”`)).toHaveClass('text-lg', 'font-medium')
      expect(screen.getByText(review.name)).toHaveClass('font-semibold')
      expect(screen.getByText(review.place)).toBeInTheDocument()
    })

    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.queryByRole('button', { name: /Go to review group/ })).toBeNull()
  })

  it('shows arrows and dots on one-up mobile and advances every five seconds', () => {
    vi.useFakeTimers()
    resizeTo(390)
    render(<Testimonials />)

    expect(screen.getByRole('button', { name: 'Next review' })).toBeInTheDocument()
    const dots = screen.getAllByRole('button', { name: /Go to review group/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveClass('w-8', 'bg-primary-600')
    expect(dots[1]).toHaveClass('w-2.5', 'bg-gray-300')

    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('steps with the arrows, wraps both ways and jumps from a dot', () => {
    resizeTo(390)
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[2]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getAllByRole('button', { name: /Go to review group/ })[1] as HTMLElement)
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('goes two-up at the middle breakpoint', () => {
    resizeTo(800)
    const { container } = render(<Testimonials />)

    expect(container.querySelector('[data-carousel] li')).toHaveStyle({ flexBasis: '50%' })
    expect(screen.getAllByRole('button', { name: /Go to review group/ })).toHaveLength(2)
  })

  it('pauses the five-second advance on hover and resumes on leave', () => {
    vi.useFakeTimers()
    resizeTo(390)
    const { container } = render(<Testimonials />)
    const band = container.querySelector('#testimonials') as HTMLElement

    fireEvent.mouseEnter(band)
    act(() => vi.advanceTimersByTime(15000))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.mouseLeave(band)
    act(() => vi.advanceTimersByTime(5000))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[1]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('keeps the dots still under reduced motion', () => {
    vi.useFakeTimers()
    resizeTo(390)
    stubMedia(true)
    render(<Testimonials />)

    act(() => vi.advanceTimersByTime(10000))
    expect(screen.getAllByRole('button', { name: /Go to review group/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
