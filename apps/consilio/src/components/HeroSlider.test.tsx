import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'

describe('HeroSlider', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('shows the eyebrow, headline, subtext, and CTA of the first slide', () => {
    render(<HeroSlider />)

    expect(screen.getByText('Committed to success')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/We help to grow your business/)
    expect(screen.getByRole('link', { name: 'Our Services' })).toBeInTheDocument()
  })

  it('advances to the next slide on an interval', () => {
    render(<HeroSlider />)

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /We help to grow your business/,
    )

    act(() => {
      vi.advanceTimersByTime(6000)
    })

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Strategy that delivers results/,
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('jumps to a slide when a dot is clicked', async () => {
    vi.useRealTimers()
    const user = userEvent.setup()
    render(<HeroSlider />)

    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))

    expect(screen.getByRole('heading', { level: 1 }).textContent).toMatch(
      /Strategy that delivers results/,
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
