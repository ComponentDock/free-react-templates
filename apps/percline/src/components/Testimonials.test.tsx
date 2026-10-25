import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Testimonials } from './Testimonials'
import { TESTIMONIALS } from '../content'

function setWidth(width: number) {
  Object.defineProperty(window, 'innerWidth', { configurable: true, value: width })
}

function track(container: HTMLElement) {
  return container.querySelector('[data-carousel-track]') as HTMLElement
}

function index(container: HTMLElement) {
  return (container.querySelector('[data-carousel]') as HTMLElement).dataset.index
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
    for (const review of TESTIMONIALS.items) {
      expect(screen.getByText(review.quote)).toBeInTheDocument()
      expect(screen.getByText(review.name)).toBeInTheDocument()
      expect(screen.getByText(review.town)).toBeInTheDocument()
      expect(screen.getByText(review.initial)).toBeInTheDocument()
    }
    expect(screen.getByText('Reviews')).toHaveClass('bg-primary-100')
  })

  it('shows no controls when the three slides fit in one view', () => {
    const { container } = render(<Testimonials />)
    expect(container.querySelectorAll('[data-carousel-slide]')).toHaveLength(3)
    expect(track(container)).toHaveStyle({ transform: 'translateX(-0%)' })
    expect(screen.queryByRole('button', { name: 'Next reviews' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Previous reviews' })).toBeNull()
    expect(screen.queryByRole('button', { name: /Go to reviews page/ })).toBeNull()
  })

  it('pages one at a time below sm, with bounds-driven arrows and dots', () => {
    setWidth(390)
    const { container } = render(<Testimonials />)

    expect(screen.queryByRole('button', { name: 'Previous reviews' })).toBeNull()
    expect(screen.getAllByRole('button', { name: /Go to reviews page/ })).toHaveLength(3)
    expect(screen.getAllByRole('button', { name: /Go to reviews page/ })[0]).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Next reviews' }))
    expect(index(container)).toBe('1')
    expect(track(container)).toHaveStyle({ transform: 'translateX(-100%)' })

    fireEvent.click(screen.getByRole('button', { name: 'Previous reviews' }))
    expect(index(container)).toBe('0')
    fireEvent.click(screen.getByRole('button', { name: 'Next reviews' }))
    expect(index(container)).toBe('1')

    fireEvent.click(screen.getByRole('button', { name: 'Go to reviews page 3' }))
    expect(index(container)).toBe('2')
    expect(screen.queryByRole('button', { name: 'Next reviews' })).toBeNull()

    fireEvent.click(screen.getByRole('button', { name: 'Go to reviews page 1' }))
    expect(index(container)).toBe('0')
    expect(screen.queryByRole('button', { name: 'Previous reviews' })).toBeNull()
  })

  it('advances every five seconds, wrapping, and pauses on hover', () => {
    vi.useFakeTimers()
    setWidth(390)
    const { container } = render(<Testimonials />)
    const carousel = container.querySelector('[data-carousel]') as HTMLElement

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(index(container)).toBe('1')

    fireEvent.mouseEnter(carousel)
    act(() => {
      vi.advanceTimersByTime(10_000)
    })
    expect(index(container)).toBe('1')

    fireEvent.mouseLeave(carousel)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(index(container)).toBe('2')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(index(container)).toBe('0')
  })

  it('does not advance under reduced motion but still pages on demand', () => {
    vi.useFakeTimers()
    vi.stubGlobal('matchMedia', () => ({ matches: true }))
    setWidth(390)
    const { container } = render(<Testimonials />)

    act(() => {
      vi.advanceTimersByTime(15_000)
    })
    expect(index(container)).toBe('0')

    fireEvent.click(screen.getByRole('button', { name: 'Next reviews' }))
    expect(index(container)).toBe('1')
  })

  it('clamps the page when the viewport widens underneath it', () => {
    setWidth(390)
    const { container } = render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to reviews page 3' }))
    expect(index(container)).toBe('2')
    expect(screen.queryByRole('button', { name: 'Next reviews' })).toBeNull()

    act(() => {
      setWidth(1440)
      window.dispatchEvent(new Event('resize'))
    })
    expect(index(container)).toBe('0')
  })
})
