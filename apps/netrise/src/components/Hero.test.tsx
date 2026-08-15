import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'
import { heroSlides } from '../data'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders both slides with headlines, subheading, blurbs and two CTAs', () => {
    render(<Hero />)
    const first = heroSlides[0]!
    const second = heroSlides[1]!
    expect(screen.getByRole('heading', { level: 1, name: first.headline })).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 1, name: second.headline, hidden: true }),
    ).toBeInTheDocument()
    expect(screen.getAllByText(first.subheading).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Get started' })).toHaveLength(1)
    expect(screen.getAllByRole('link', { name: 'Read more' })).toHaveLength(1)
  })

  it('switches slides when an indicator is clicked', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    const dashes = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dashes).toHaveLength(2)
    expect(dashes[0]!).toHaveAttribute('aria-current', 'true')
    await user.click(dashes[1]!)
    expect(dashes[1]!).toHaveAttribute('aria-current', 'true')
  })

  it('auto-advances on an interval and cleans up on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    const dashes = screen.getAllByRole('button', { name: /Go to slide/ })
    expect(dashes[0]!).toHaveAttribute('aria-current', 'true')
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(dashes[1]!).toHaveAttribute('aria-current', 'true')
    unmount()
    act(() => {
      vi.advanceTimersByTime(7000)
    })
  })
})
