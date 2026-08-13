import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  const activeSlide = (container: HTMLElement) =>
    container.querySelector('[data-slide][aria-hidden="false"]')

  it('renders the headline, blurb, and Get In Touch button over the first slide', () => {
    const { container } = render(<Hero />)

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Interior Design')
    expect(screen.getByText(/Lorem ipsum/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Get In Touch' })).toHaveAttribute('href', '#contact')

    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(3)
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('0')
  })

  it('advances to the next slide and wraps around with the controls', async () => {
    const user = userEvent.setup()
    const { container } = render(<Hero />)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('1')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('2')

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('0')

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('2')
  })

  it('auto-rotates to the next slide every five seconds', () => {
    vi.useFakeTimers()
    const { container } = render(<Hero />)

    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(activeSlide(container)?.getAttribute('data-slide')).toBe('1')
  })

  it('uses a picsum placeholder background for every slide', () => {
    const { container } = render(<Hero />)

    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(heroSlides.length)
    for (const slide of slides) {
      expect(slide.getAttribute('style')).toContain('picsum.photos/id/')
    }
  })
})
