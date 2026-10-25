import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { TESTIMONIALS } from '../content'
import { Testimonials } from './Testimonials'

const originalMatchMedia = window.matchMedia

afterEach(() => {
  vi.useRealTimers()
  Object.defineProperty(window, 'matchMedia', { configurable: true, value: originalMatchMedia })
})

function stubWidths({ sm, lg, reduced = false }: { sm: boolean; lg: boolean; reduced?: boolean }) {
  Object.defineProperty(window, 'matchMedia', {
    configurable: true,
    value: vi.fn((query: string) => ({
      matches: query.includes('reduce') ? reduced : query.includes('1024') ? lg : sm,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })),
  })
}

describe('Testimonials', () => {
  it('is a plain 3-up row at desktop width — no arrows and no dots', () => {
    render(<Testimonials />)
    expect(screen.getAllByText(/The quote was the price|Turned up when they said|They found the actual cause/)).toHaveLength(3)
    expect(screen.queryByRole('button', { name: 'Next review' })).toBeNull()
    expect(screen.queryByRole('button', { name: 'Show review 1' })).toBeNull()
    expect(screen.getAllByText('5 out of 5')).toHaveLength(TESTIMONIALS.length)
  })

  it('becomes a real carousel below lg, with arrows and dots', () => {
    stubWidths({ sm: true, lg: false })
    render(<Testimonials />)
    const track = document.querySelector('[data-carousel-track]') as HTMLElement
    expect(track.style.transform).toBe('translateX(-0%)')
    expect(screen.getByRole('button', { name: 'Show review 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getAllByRole('button', { name: /Show review/ })).toHaveLength(2)

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track.style.transform).toBe('translateX(-50%)')
    expect(screen.getByRole('button', { name: 'Show review 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track.style.transform).toBe('translateX(-0%)')
  })

  it('clamps the arrows at both ends and moves by dot', () => {
    stubWidths({ sm: false, lg: false })
    render(<Testimonials />)
    const track = document.querySelector('[data-carousel-track]') as HTMLElement
    expect(screen.getAllByRole('button', { name: /Show review/ })).toHaveLength(3)

    fireEvent.click(screen.getByRole('button', { name: 'Previous review' }))
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track.style.transform).toBe('translateX(-100%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track.style.transform).toBe('translateX(-200%)')

    fireEvent.click(screen.getByRole('button', { name: 'Next review' }))
    expect(track.style.transform).toBe('translateX(-200%)')

    fireEvent.click(screen.getByRole('button', { name: 'Show review 1' }))
    expect(track.style.transform).toBe('translateX(-0%)')
  })

  it('autoplays every five seconds and pauses on hover', () => {
    stubWidths({ sm: true, lg: false })
    vi.useFakeTimers()
    render(<Testimonials />)
    const track = document.querySelector('[data-carousel-track]') as HTMLElement

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-50%)')

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.mouseEnter(track.parentElement as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(10000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')

    fireEvent.mouseLeave(track.parentElement as HTMLElement)
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track.style.transform).toBe('translateX(-50%)')
  })

  it('does not autoplay under prefers-reduced-motion', () => {
    stubWidths({ sm: true, lg: false, reduced: true })
    vi.useFakeTimers()
    render(<Testimonials />)
    const track = document.querySelector('[data-carousel-track]') as HTMLElement
    act(() => {
      vi.advanceTimersByTime(15000)
    })
    expect(track.style.transform).toBe('translateX(-0%)')
  })
})
