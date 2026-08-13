import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  it('shows the headline and a photo on each slide under a dark overlay', () => {
    const { container } = render(<HeroSlider />)
    expect(screen.getAllByRole('heading', { level: 2, hidden: true })).toHaveLength(3)
    expect(
      screen.getByRole('heading', { level: 2, name: /Please Help African Children/ }),
    ).toBeInTheDocument()
    const slides = container.querySelectorAll('section > div[aria-hidden]')
    expect(slides).toHaveLength(3)
    expect(container.querySelectorAll('img')).toHaveLength(3)
    expect(container.querySelector('.bg-black\\/40')).toBeInTheDocument()
  })

  it('shows carousel controls and no donate button in the slide', () => {
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Previous slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next slide' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: 'Donate Now' })).not.toBeInTheDocument()
  })

  it('navigates with prev and next arrows and wraps around', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('opacity-100')
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('opacity-100')
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('opacity-100')
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveClass('opacity-100')
  })

  it('jumps to a slide when its bar dot is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveClass('opacity-100')
  })

  it('rotates through the slides on a timer and cleans up on unmount', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(<HeroSlider />)
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveClass('opacity-100')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveClass('opacity-100')
      act(() => {
        vi.advanceTimersByTime(5000)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveClass('opacity-100')
      unmount()
    } finally {
      vi.useRealTimers()
    }
  })
})
