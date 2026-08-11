import { describe, expect, it, vi, afterEach } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { authorName, commentCount, heroSlides, postDate, postTitle } from '../data'

afterEach(() => {
  vi.useRealTimers()
})

describe('HeroSlider', () => {
  it('renders the first slide with badge, meta, headline and excerpt', () => {
    render(<HeroSlider />)
    const slide = heroSlides[0]!
    expect(screen.getByRole('region', { name: 'Featured posts' })).toBeInTheDocument()
    expect(screen.getByText(slide.category)).toBeInTheDocument()
    expect(screen.getByText(postTitle)).toBeInTheDocument()
    expect(screen.getByText(slide.excerpt)).toBeInTheDocument()
    expect(screen.getByText(authorName)).toBeInTheDocument()
    expect(screen.getByText(postDate)).toBeInTheDocument()
    expect(screen.getByText(String(commentCount))).toBeInTheDocument()
  })

  it('moves to the next slide and cycles back to the first', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    await user.click(screen.getByRole('button', { name: 'Next slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps to the last slide from the first via the previous arrow', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Previous slide' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide via its dot', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 3' }))
    expect(screen.getByRole('button', { name: 'Go to slide 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances every 5 seconds', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    expect(screen.getByRole('button', { name: 'Go to slide 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
