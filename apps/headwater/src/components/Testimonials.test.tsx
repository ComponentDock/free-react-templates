import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../content'

const originalWidth = window.innerWidth
const originalMatchMedia = window.matchMedia

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, writable: true, value: width })
}

function track() {
  return document.querySelector('[data-carousel]') as HTMLElement
}

beforeEach(() => {
  setWidth(1024)
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn().mockReturnValue({ matches: false }),
  })
})

afterEach(() => {
  vi.useRealTimers()
  setWidth(originalWidth)
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
})

describe('Testimonials', () => {
  it('renders the pill, the heading and three slides', () => {
    render(<Testimonials />)
    expect(screen.getByText(TESTIMONIALS.badge)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(TESTIMONIALS.heading)
    expect(screen.getByText(TESTIMONIALS.lede)).toBeInTheDocument()
    expect(document.querySelectorAll('[data-carousel-slide]')).toHaveLength(3)
    for (const item of TESTIMONIALS.items) {
      expect(screen.getByText(item.quote)).toBeInTheDocument()
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.town)).toBeInTheDocument()
    }
  })

  it('renders no arrows and no dots when three slides fill the window', () => {
    render(<Testimonials />)
    expect(track()).toHaveAttribute('data-index', '0')
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).toBeNull()
  })

  it('pages two at a time at 768 px', () => {
    setWidth(768)
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.queryByRole('button', { name: 'Go to slide 3' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track()).toHaveAttribute('data-index', '1')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track()).toHaveAttribute('data-index', '0')

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(track()).toHaveAttribute('data-index', '1')
  })

  it('pages one at a time at 390 px and advances on a 5 s timer', () => {
    vi.useFakeTimers()
    setWidth(390)
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()

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

  it('pauses on hover and resumes when the pointer leaves', () => {
    vi.useFakeTimers()
    setWidth(390)
    render(<Testimonials />)

    fireEvent.mouseEnter(track())
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '0')

    fireEvent.mouseLeave(track())
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toHaveAttribute('data-index', '1')
  })

  it('does not advance itself when motion is reduced', () => {
    vi.useFakeTimers()
    setWidth(390)
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      value: vi.fn().mockReturnValue({ matches: true }),
    })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })
    expect(track()).toHaveAttribute('data-index', '0')
  })

  it('clamps the page back to the first when the viewport widens', () => {
    setWidth(390)
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(track()).toHaveAttribute('data-index', '2')

    act(() => {
      setWidth(1440)
      window.dispatchEvent(new Event('resize'))
    })
    expect(track()).toHaveAttribute('data-index', '0')
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).toBeNull()
  })
})
