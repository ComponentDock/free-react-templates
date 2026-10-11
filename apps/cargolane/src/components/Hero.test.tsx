import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, fireEvent, render, screen } from '@testing-library/react'
import { HERO_SLIDES } from '../data/content'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders a full-viewport photo cover with overlay and centered white content', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.className).toContain('min-h-screen')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('We Make Shipping')
    expect(screen.getByText('A Logistics Company')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get Started!' })).toHaveAttribute('href', '#contact')
    expect(container.querySelector('.bg-black\\/40')).toBeInTheDocument()
  })

  it('uses seeded placeholder photography for every slide', () => {
    render(<Hero />)
    const images = screen.getAllByRole('img')
    expect(images).toHaveLength(HERO_SLIDES.length)
    for (const image of images) {
      expect(image.getAttribute('src')).toContain('picsum.photos/seed/cargolane-hero-')
    }
  })

  it('crossfades slides with next, previous, and dot controls', () => {
    const { container } = render(<Hero />)
    const activeSrc = () => container.querySelector('img.opacity-100')?.getAttribute('src') ?? ''

    expect(activeSrc()).toBe(HERO_SLIDES[0].image)
    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeSrc()).toBe(HERO_SLIDES[1].image)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(activeSrc()).toBe(HERO_SLIDES[0].image)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(activeSrc()).toBe(HERO_SLIDES[2].image)
  })

  it('wraps around when stepping past the last slide', () => {
    const { container } = render(<Hero />)
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(container.querySelector('img.opacity-100')?.getAttribute('src')).toBe(
      HERO_SLIDES[HERO_SLIDES.length - 1]!.image,
    )
  })

  it('auto-advances and stops the timer on unmount', () => {
    vi.useFakeTimers()
    const { container, unmount } = render(<Hero />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(container.querySelector('img.opacity-100')?.getAttribute('src')).toBe(
      HERO_SLIDES[1].image,
    )
    unmount()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
  })
})
