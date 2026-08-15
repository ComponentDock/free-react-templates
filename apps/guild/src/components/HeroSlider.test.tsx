import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { HeroSlider } from './HeroSlider'
import { heroAutoplayMs } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders both slides with title, blurb and CTA', () => {
    const { container } = render(<HeroSlider />)
    // text queries ignore aria-hidden, so both slides are visible to them
    expect(screen.getAllByText('Enter the Battle')).toHaveLength(2)
    expect(screen.getAllByText('Read More')).toHaveLength(2)
    expect(container.querySelectorAll('img')).toHaveLength(2)
  })

  it('shows two dots with the first active', () => {
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots).toHaveLength(2)
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
  })

  it('switches slides when a dot is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(dots[1]!)
    expect(dots[1]!).toHaveAttribute('aria-current', 'true')
    expect(dots[0]!).not.toHaveAttribute('aria-current')
  })

  it('auto-advances to the next slide after the autoplay interval', () => {
    vi.useFakeTimers()
    render(<HeroSlider />)
    const dots = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dots[0]!).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(heroAutoplayMs)
    })
    expect(dots[1]!).toHaveAttribute('aria-current', 'true')
  })
})
