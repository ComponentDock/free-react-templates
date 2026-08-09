import { afterEach, describe, expect, it, vi } from 'vitest'
import { act, cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Hero } from './Hero'

describe('Hero', () => {
  afterEach(() => {
    cleanup()
    vi.useRealTimers()
  })

  it('renders the first slide with the headline and Discover Now CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Peony Salon')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1, name: /get pretty look/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /discover now/i })).toHaveAttribute('href', '#about')
  })

  it('advances to the second slide via the next button and wraps around', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1, name: /beauty salon/i })).toBeInTheDocument()
    expect(screen.getByText('Natural Beauty')).toBeInTheDocument()
    await user.click(screen.getByRole('button', { name: /next slide/i }))
    expect(screen.getByRole('heading', { level: 1, name: /get pretty look/i })).toBeInTheDocument()
  })

  it('goes to the previous slide via the prev button', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: /prev/i }))
    expect(screen.getByRole('heading', { level: 1, name: /beauty salon/i })).toBeInTheDocument()
  })

  it('auto-advances on a timer and clears it on unmount', () => {
    vi.useFakeTimers()
    const { unmount } = render(<Hero />)
    expect(screen.getByRole('heading', { level: 1, name: /get pretty look/i })).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1, name: /beauty salon/i })).toBeInTheDocument()
    unmount()
    expect(vi.getTimerCount()).toBe(0)
  })
})
