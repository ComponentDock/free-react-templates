import { fireEvent, render, screen } from '@testing-library/react'
import { act } from 'react'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the first slide with sub-title, headline, and background photo', () => {
    const { container } = render(<HeroSlider />)
    const headings = screen.getAllByRole('heading', { level: 1, hidden: true })
    expect(headings[0]).toHaveTextContent('Grape Wine')
    expect(headings[1]).toHaveTextContent('Wines For Everyone')
    expect(screen.getByText('Royal Wine')).toBeInTheDocument()
    const slides = container.querySelectorAll('[data-slide]')
    expect(slides).toHaveLength(2)
    expect(slides[0]!.getAttribute('aria-hidden')).not.toBe('true')
    expect(slides[1]).toHaveAttribute('aria-hidden', 'true')
    expect(container.querySelector('img')).toHaveAttribute(
      'src',
      'https://picsum.photos/id/431/1600/1000',
    )
  })

  it('advances with the next arrow and wraps around', () => {
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
    expect(track()).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    fireEvent.click(prev)
    expect(track()).toBe('translateX(0%)')
  })

  it('jumps to a slide via the pagination dots', () => {
    render(<HeroSlider />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    const track = () => (document.querySelector('[data-track]') as HTMLElement).style.transform
    expect(track()).toBe('translateX(-100%)')
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).not.toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every five seconds', () => {
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
    expect(track()).toBe('translateX(0%)')
  })
})
