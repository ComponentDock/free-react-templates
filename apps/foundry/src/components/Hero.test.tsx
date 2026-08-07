import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, first tagline, and call-to-action', () => {
    render(<Hero />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: /Providing all Kinds of Construction Services/,
      }),
    ).toBeInTheDocument()
    expect(screen.getByText('Constructing Spaces For You')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View Projects/ })).toBeInTheDocument()
  })

  it('rotates through the taglines on the next control', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const next = screen.getByRole('button', { name: 'Next slide' })
    await user.click(next)
    expect(screen.getByText('Building Your Solid')).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText('High Class Building')).toBeInTheDocument()
    await user.click(next)
    expect(screen.getByText('Constructing Spaces For You')).toBeInTheDocument()
  })

  it('goes back through the taglines on the previous control', async () => {
    const user = userEvent.setup()
    render(<Hero />)

    const prev = screen.getByRole('button', { name: 'Previous slide' })
    await user.click(prev)
    expect(screen.getByText('High Class Building')).toBeInTheDocument()
  })

  it('auto-advances the slider on an interval', () => {
    vi.useFakeTimers()
    render(<Hero />)
    expect(screen.getByText('Constructing Spaces For You')).toBeInTheDocument()

    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Building Your Solid')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
