import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroSlider } from './HeroSlider'
import { heroSlides } from '../data'

describe('HeroSlider', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders both slides with the reference headlines and a Read More CTA', () => {
    render(<HeroSlider />)
    const first = heroSlides[0]!
    const second = heroSlides[1]!
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: second.headline, hidden: true }),
    ).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Read More', hidden: true })).toHaveLength(2)
  })

  it('shows two dash indicators with the first active', () => {
    render(<HeroSlider />)
    const dashes = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dashes).toHaveLength(2)
    expect(dashes[0]!).toHaveAttribute('aria-current', 'true')
    expect(dashes[1]!).not.toHaveAttribute('aria-current')
  })

  it('switches slides when an indicator is clicked', async () => {
    const user = userEvent.setup()
    render(<HeroSlider />)
    const dashes = screen.getAllByRole('button', { name: /Go to slide/ })
    await user.click(dashes[1]!)
    expect(dashes[1]!).toHaveAttribute('aria-current', 'true')
    const slides = screen.getAllByRole('group', { hidden: true })
    expect(slides[1]!).toHaveAttribute('aria-hidden', 'false')
    expect(slides[0]!).toHaveAttribute('aria-hidden', 'true')
  })

  it('auto-advances on an interval and cleans up on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<HeroSlider />)
    const dashes = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dashes[0]!).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(dashes[1]!).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(dashes[0]!).toHaveAttribute('aria-current', 'true')
    unmount()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
  })
})
