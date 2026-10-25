import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { mockMatchMedia, resetMatchMedia } from '../test/media'
import { Testimonials } from './Testimonials'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
  act(() => {
    window.dispatchEvent(new Event('resize'))
  })
}

beforeEach(() => {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: 1280 })
  mockMatchMedia(false)
})

afterEach(() => {
  vi.useRealTimers()
  vi.restoreAllMocks()
  resetMatchMedia()
})

describe('Testimonials', () => {
  it('renders three quotes with one labelled rating each', () => {
    render(<Testimonials />)

    expect(screen.getAllByRole('figure')).toHaveLength(3)
    expect(screen.getAllByRole('img', { name: 'Rated 5 out of 5' })).toHaveLength(3)
    expect(screen.getByText('Nour Haddad')).toBeInTheDocument()
    expect(screen.getByText('Family archivist')).toBeInTheDocument()
    expect(screen.getByText(/I post photographs of my children again/)).toBeInTheDocument()
  })

  it('hides the arrows at desktop width, where every card is already visible', () => {
    render(<Testimonials />)

    expect(screen.queryByRole('button', { name: 'Next testimonial' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Previous testimonial' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Go to slide 1' })).toBeNull()
  })

  it('advances one card at a time below lg and widens the active dot', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 })
    render(<Testimonials />)

    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(3)
    expect(dots[0]).toHaveClass('w-8')
    expect(dots[1]).toHaveClass('w-2.5')

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveClass('w-8')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveClass('w-8')

    for (let step = 0; step < 3; step += 1) {
      fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    }
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveClass('w-8')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[2]).toHaveClass('w-8')

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveClass('w-8')
  })

  it('shows two cards per view between sm and lg', () => {
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 700 })
    render(<Testimonials />)

    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(2)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveClass('w-8')
  })

  it('follows a resize back to a single card', () => {
    render(<Testimonials />)
    expect(screen.queryByRole('button', { name: 'Next testimonial' })).toBeNull()

    setWidth(480)
    expect(screen.getAllByRole('button', { name: /Go to slide/ })).toHaveLength(3)
  })

  it('autoplays every five seconds and pauses on hover', () => {
    vi.useFakeTimers()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveClass('w-8')

    const region = screen.getByRole('list').parentElement as HTMLElement
    fireEvent.mouseEnter(region)
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[1]).toHaveClass('w-8')

    fireEvent.mouseLeave(region)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[2]).toHaveClass('w-8')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveClass('w-8')
  })

  it('does not autoplay under reduced motion', () => {
    mockMatchMedia(true)
    vi.useFakeTimers()
    Object.defineProperty(window, 'innerWidth', { configurable: true, value: 500 })
    render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(20000)
    })
    expect(screen.getAllByRole('button', { name: /Go to slide/ })[0]).toHaveClass('w-8')
  })
})
