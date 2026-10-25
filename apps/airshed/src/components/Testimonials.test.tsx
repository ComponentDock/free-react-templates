import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { TESTIMONIALS } from '../content'
import { Testimonials } from './Testimonials'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

beforeEach(() => {
  setWidth(1024)
})

afterEach(() => {
  vi.useRealTimers()
})

describe('Testimonials', () => {
  it('renders the three quote cards with names, towns and five stars each', () => {
    render(<Testimonials />)
    TESTIMONIALS.items.forEach((item) => {
      expect(screen.getByText(item.quote)).toBeInTheDocument()
      expect(screen.getByText(item.name)).toBeInTheDocument()
      expect(screen.getByText(item.town)).toBeInTheDocument()
    })
    expect(screen.getByText(TESTIMONIALS.pill)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: TESTIMONIALS.heading })).toBeInTheDocument()
    expect(screen.getByText(TESTIMONIALS.lede)).toBeInTheDocument()
  })

  it('shows all three cards at 1440 px with no arrow rendered at all', () => {
    setWidth(1440)
    render(<Testimonials />)
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Previous review' })).toBeNull()
    expect(screen.queryByRole('button', { name: /Show review group/ })).toBeNull()
    const slides = document.querySelectorAll('[data-carousel-track] > div')
    expect(slides).toHaveLength(3)
    expect((slides[0] as HTMLElement).style.width).toBe('33.333333333333336%')
  })

  it('shows two dots and two arrows at 768 px, and moves one card at a time', () => {
    setWidth(768)
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Next review' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous review' })).toBeInTheDocument()
    expect(screen.getAllByRole('button', { name: /Show review group/ })).toHaveLength(2)

    const track = document.querySelector('[data-carousel-track]') as HTMLElement
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track.style.transform).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Show review group 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track.style.transform).toBe('translateX(-0%)')
  })

  it('shows three dots at 390 px, jumps by dot and clamps at both ends', () => {
    setWidth(390)
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Show review group/ })).toHaveLength(3)
    const prev = screen.getByRole('button', { name: 'Previous review' })
    const next = screen.getByRole('button', { name: 'Next review' })
    expect(prev).toBeDisabled()

    fireEvent.click(screen.getByRole('button', { name: 'Show review group 3' }))
    expect((document.querySelector('[data-carousel-track]') as HTMLElement).style.transform).toBe(
      'translateX(-200%)',
    )
    expect(next).toBeDisabled()

    fireEvent.click(next)
    expect((document.querySelector('[data-carousel-track]') as HTMLElement).style.transform).toBe(
      'translateX(-200%)',
    )
    fireEvent.click(prev)
    expect((document.querySelector('[data-carousel-track]') as HTMLElement).style.transform).toBe(
      'translateX(-100%)',
    )
  })

  it('re-reads the breakpoint on resize', () => {
    setWidth(390)
    render(<Testimonials />)
    expect(screen.getAllByRole('button', { name: /Show review group/ })).toHaveLength(3)

    act(() => {
      setWidth(1440)
      window.dispatchEvent(new Event('resize'))
    })
    expect(screen.queryByRole('button', { name: /Show review group/ })).toBeNull()
  })

  it('autoplays every five seconds and pauses while hovered', () => {
    vi.useFakeTimers()
    setWidth(390)
    const { container } = render(<Testimonials />)
    const track = document.querySelector('[data-carousel-track]') as HTMLElement
    expect(track.style.transform).toBe('translateX(-0%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-100%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-200%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.mouseEnter(container.querySelector('section') as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.mouseLeave(container.querySelector('section') as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-100%)')
  })
})
