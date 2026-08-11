import { describe, expect, it, vi } from 'vitest'
import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { HeroPostStrip } from './HeroPostStrip'
import {
  heroPostAutoAdvanceMs,
  heroPostStripLabel,
  heroStripPosts,
  nextSlideLabel,
  previousSlideLabel,
} from '../data'

describe('HeroPostStrip', () => {
  it('renders four numbered posts with the first one active', () => {
    render(<HeroPostStrip />)
    expect(screen.getByRole('region', { name: heroPostStripLabel })).toBeInTheDocument()
    expect(screen.getByText('1')).toBeInTheDocument()
    expect(screen.getByText('4')).toBeInTheDocument()
    expect(screen.getAllByRole('link')).toHaveLength(heroStripPosts.length)
    expect(screen.getByRole('link', { name: heroStripPosts[0]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('link', { name: heroStripPosts[1]!.title })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('advances and wraps via the next button', async () => {
    const user = userEvent.setup()
    render(<HeroPostStrip />)

    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('link', { name: heroStripPosts[1]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )

    // Three more clicks wrap back to the first slide.
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    await user.click(screen.getByRole('button', { name: nextSlideLabel }))
    expect(screen.getByRole('link', { name: heroStripPosts[0]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('wraps backward via the previous button', async () => {
    const user = userEvent.setup()
    render(<HeroPostStrip />)

    await user.click(screen.getByRole('button', { name: previousSlideLabel }))
    expect(screen.getByRole('link', { name: heroStripPosts[3]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances the active slide on an interval', () => {
    vi.useFakeTimers()
    render(<HeroPostStrip />)

    expect(screen.getByRole('link', { name: heroStripPosts[0]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )

    act(() => {
      vi.advanceTimersByTime(heroPostAutoAdvanceMs)
    })
    expect(screen.getByRole('link', { name: heroStripPosts[1]!.title })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('link', { name: heroStripPosts[0]!.title })).not.toHaveAttribute(
      'aria-current',
    )

    vi.useRealTimers()
  })
})
