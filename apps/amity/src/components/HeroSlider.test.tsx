import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the headline, mission paragraph, and pill buttons', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1, name: 'Donate' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: '4 a better world' })).toBeInTheDocument()
    expect(screen.getAllByText(/Every child deserves a chance/)).toHaveLength(3)
    expect(screen.getByRole('link', { name: 'Donate Now' })).toHaveAttribute('href', '#donate')
    expect(screen.getByRole('link', { name: 'Read More' })).toHaveAttribute('href', '#about')
  })

  it('renders three slides in the track', () => {
    const { container } = render(<HeroSlider />)
    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(3)
    expect(slides[0]).toHaveAttribute('aria-hidden', 'false')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
  })

  it('advances to the next slide with the next arrow and wraps around', () => {
    render(<HeroSlider />)
    const next = screen.getByRole('button', { name: 'Next slide' })
    const track = () => (document.querySelector('[data-track]') as HTMLElement).style.transform

    fireEvent.click(next)
    expect(track()).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(next)
    expect(track()).toBe('translateX(-200%)')

    fireEvent.click(next)
    expect(track()).toBe('translateX(0%)')
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('goes back with the previous arrow and wraps around', () => {
    render(<HeroSlider />)
    const prev = screen.getByRole('button', { name: 'Previous slide' })
    const track = () => (document.querySelector('[data-track]') as HTMLElement).style.transform

    fireEvent.click(prev)
    expect(track()).toBe('translateX(-200%)')

    fireEvent.click(prev)
    expect(track()).toBe('translateX(-100%)')
  })

  it('jumps to a slide from the pagination dots', () => {
    render(<HeroSlider />)
    const track = () => (document.querySelector('[data-track]') as HTMLElement).style.transform

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(track()).toBe('translateX(-200%)')
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('cycles automatically every five seconds', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    const track = () => (document.querySelector('[data-track]') as HTMLElement).style.transform

    expect(track()).toBe('translateX(0%)')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toBe('translateX(-100%)')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toBe('translateX(-200%)')
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(track()).toBe('translateX(0%)')
  })
})
