import { act, fireEvent, render, screen } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => vi.useFakeTimers())
  afterEach(() => vi.useRealTimers())

  it('renders the first slide with kicker, headline, paragraph and CTA', () => {
    render(<HeroSlider />)

    expect(screen.getByText('Discover Your Taste')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: 'Good food brings a great smile' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Reservation' })).toHaveAttribute('href', '#booking')
  })

  it('uses a seeded hero backdrop photo', () => {
    const { container } = render(<HeroSlider />)

    const img = container.querySelector('img')
    expect(img?.getAttribute('src')).toBe('https://picsum.photos/seed/bistro-hero/1920/1080')
  })

  it('rotates to the next slide automatically', () => {
    render(<HeroSlider />)

    expect(screen.queryByText('Fresh Ingredients Daily')).not.toBeInTheDocument()
    act(() => vi.advanceTimersByTime(6000))
    expect(screen.getByText('Fresh Ingredients Daily')).toBeInTheDocument()
  })

  it('wraps around to the first slide after the last one', () => {
    render(<HeroSlider />)

    act(() => vi.advanceTimersByTime(12000))
    expect(screen.getByText('Good food brings a great smile')).toBeInTheDocument()
  })

  it('moves slides with the next/prev arrows, wrapping backwards', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByText('Fresh Ingredients Daily')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Discover Your Taste')).toBeInTheDocument()

    // Wraps from the first slide back to the last.
    fireEvent.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByText('Fresh Ingredients Daily')).toBeInTheDocument()
  })

  it('jumps to a slide via the dots', () => {
    render(<HeroSlider />)

    fireEvent.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByText('Fresh Ingredients Daily')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'false',
    )
  })

  it('pauses auto-rotation while hovered and resumes after', () => {
    const { container } = render(<HeroSlider />)
    const section = container.querySelector('section')!

    fireEvent.mouseEnter(section)
    act(() => vi.advanceTimersByTime(12000))
    expect(screen.getByText('Discover Your Taste')).toBeInTheDocument()

    fireEvent.mouseLeave(section)
    act(() => vi.advanceTimersByTime(6000))
    expect(screen.getByText('Fresh Ingredients Daily')).toBeInTheDocument()
  })

  it('cleans up the interval on unmount', () => {
    const { unmount } = render(<HeroSlider />)

    unmount()
    act(() => vi.advanceTimersByTime(12000))
    expect(screen.queryByText('Fresh Ingredients Daily')).not.toBeInTheDocument()
  })

  it('announces slide changes via aria-live', () => {
    const { container } = render(<HeroSlider />)

    expect(container.querySelector('[aria-live="polite"]')).not.toBeNull()
  })
})
