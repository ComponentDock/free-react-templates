import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroIntervalMs, heroSlides, slideLabel } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first slide with a category tag and headline', () => {
    render(<HeroSlider />)

    const first = heroSlides[0]!
    expect(screen.getByText(first.category)).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
  })

  it('switches slides via the indicator dots', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)

    const second = heroSlides[1]!
    expect(
      screen.queryByRole('heading', { level: 1, name: second.headline }),
    ).not.toBeInTheDocument()

    await user.click(screen.getByRole('button', { name: slideLabel(2) }))
    expect(screen.getByRole('heading', { level: 1, name: second.headline })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: slideLabel(2) })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances to the next slide on the interval and wraps around', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)

    const first = heroSlides[0]!
    const second = heroSlides[1]!

    act(() => {
      vi.advanceTimersByTime(heroIntervalMs)
    })
    expect(screen.getByRole('heading', { level: 1, name: second.headline })).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(heroIntervalMs)
    })
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
  })
})
