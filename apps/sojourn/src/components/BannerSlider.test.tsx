import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { BannerSlider } from './BannerSlider'
import { bannerAutoplayMs, bannerSlides } from '../data'

describe('BannerSlider', () => {
  it('renders the slides with a category tag, title, and Read More button', () => {
    render(<BannerSlider />)
    expect(screen.getByRole('region', { name: 'Featured slides' })).toBeInTheDocument()
    expect(screen.getByText('Lifestyle')).toBeInTheDocument()
    expect(screen.getByText('Natural summer')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Read More' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('advances to the next slide via the next control and wraps around', async () => {
    const user = userEvent.setup()
    render(<BannerSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByText('Cruise to Alaska')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('moves to the previous slide and wraps backward', async () => {
    const user = userEvent.setup()
    render(<BannerSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide when its indicator is activated', async () => {
    const user = userEvent.setup()
    render(<BannerSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances after the autoplay interval and cleans up on unmount', () => {
    vi.useFakeTimers()
    try {
      const { unmount } = render(<BannerSlider />)
      expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
        'aria-current',
        'true',
      )
      act(() => {
        vi.advanceTimersByTime(bannerAutoplayMs)
      })
      expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
        'aria-current',
        'true',
      )
      unmount()
      act(() => {
        vi.advanceTimersByTime(bannerAutoplayMs)
      })
      expect(vi.getTimerCount()).toBe(0)
    } finally {
      vi.useRealTimers()
    }
  })

  it('renders every slide image in the hidden stack', () => {
    const { container } = render(<BannerSlider />)
    expect(container.querySelectorAll('img')).toHaveLength(bannerSlides.length)
  })
})
