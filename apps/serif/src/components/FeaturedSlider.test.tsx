import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { FeaturedSlider } from './FeaturedSlider'
import {
  featuredPosts,
  nextSlideLabel,
  prevSlideLabel,
  sliderAutoplayMs,
  sliderLabel,
} from '../data'

describe('FeaturedSlider', () => {
  it('renders all six featured cards with label chips, titles and meta', () => {
    const { container } = render(<FeaturedSlider />)

    expect(screen.getByRole('region', { name: sliderLabel })).toBeInTheDocument()
    expect(container.querySelectorAll('img')).toHaveLength(featuredPosts.length)
    expect(screen.getAllByText('FASHION').length).toBeGreaterThan(0)
    expect(screen.getAllByText(featuredPosts[0]!.title).length).toBeGreaterThan(0)
    expect(screen.getAllByText('2 days ago').length).toBe(featuredPosts.length)
  })

  it('moves to the next slide set via the next arrow', async () => {
    const user = userEvent.setup()
    const { container } = render(<FeaturedSlider />)

    const track = container.querySelector('[data-slider-track]')
    expect(track).not.toBeNull()
    expect(track).toHaveAttribute('style', expect.stringMatching(/translateX\(-?0%\)/))

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(track).toHaveAttribute('style', expect.stringContaining('-33.333'))
  })

  it('moves back with the previous arrow and wraps around', async () => {
    const user = userEvent.setup()
    const { container } = render(<FeaturedSlider />)

    const track = container.querySelector('[data-slider-track]')
    await user.click(screen.getByRole('button', { name: prevSlideLabel }))
    expect(track).toHaveAttribute('style', expect.stringContaining('-100%'))
  })

  it('auto-advances after the autoplay interval and cleans up on unmount', () => {
    vi.useFakeTimers()
    try {
      const { container, unmount } = render(<FeaturedSlider />)
      const track = container.querySelector('[data-slider-track]')

      act(() => {
        vi.advanceTimersByTime(sliderAutoplayMs)
      })
      expect(track).toHaveAttribute('style', expect.stringContaining('-33.333'))

      unmount()
      act(() => {
        vi.advanceTimersByTime(sliderAutoplayMs)
      })
      expect(vi.getTimerCount()).toBe(0)
    } finally {
      vi.useRealTimers()
    }
  })
})
