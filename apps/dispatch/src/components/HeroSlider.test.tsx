import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides, similarPosts } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with category pill, headline and Continue Reading link', () => {
    const { container } = render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/van Gogh/)
    expect(screen.getByText('sport')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Continue Reading/ })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(heroSlides.length)
  })

  it('renders the similar posts strip and the next panel', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('link', { name: similarPosts[0] })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: similarPosts[1] })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: similarPosts[2] })).toBeInTheDocument()
    expect(screen.getByText('next')).toBeInTheDocument()
  })

  it('advances and goes back with the arrow buttons', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Slow Living/)

    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Street Style/)

    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Slow Living/)
  })

  it('wraps around from the first slide to the last', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Street Style/)
  })

  it('jumps to a slide via the dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const firstDot = screen.getByRole('button', { name: 'Go to slide 1' })
    expect(firstDot).toHaveAttribute('aria-current', 'true')

    const dot = screen.getByRole('button', { name: 'Go to slide 2' })
    await user.click(dot)
    expect(dot).toHaveAttribute('aria-current', 'true')
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Slow Living/)
  })

  it('auto-advances to the next slide after a few seconds', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/van Gogh/)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Slow Living/)

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Street Style/)
  })

  it('clears the auto-advance timer on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<HeroSlider />)
    unmount()
    expect(() => act(() => vi.advanceTimersByTime(12000))).not.toThrow()
  })
})
