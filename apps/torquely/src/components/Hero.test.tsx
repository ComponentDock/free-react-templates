import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the first slide with a kicker, headline, and booking button', () => {
    render(<Hero />)
    expect(screen.getByText('We are best car repair services')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Make your car last longer')
    expect(screen.getByRole('button', { name: /Book an appointment/i })).toBeInTheDocument()
  })

  it('switches slides when a dot is activated', async () => {
    const user = userEvent.setup()
    render(<Hero />)
    await user.click(screen.getByRole('button', { name: 'Go to slide 2' }))
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "It's time to come to repair your car",
    )
    expect(screen.getByRole('button', { name: 'Go to slide 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('auto-advances the carousel on an interval and wraps around', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Make your car last longer')
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      "It's time to come to repair your car",
    )
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Make your car last longer')
    vi.useRealTimers()
  })
})
